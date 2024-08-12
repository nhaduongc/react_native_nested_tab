import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
import { View, Dimensions, FlatList, ActivityIndicator, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import TabCategory from '../components/TabCategory';
import VideoListItem from './VideoListItem';

import { setFocusTabIndex } from '../store/redux/exploreTab';

import useFetchCategories from '../hook/useFetchCategories';

const { width: screenWidth } = Dimensions.get('screen');
import { categories } from '../data/categories';

const RANGE_SCROLL_PARENT_TAB = 30

const ExploreScreen = () => {
    const dispatch = useDispatch()
    const ref = useRef();
    const tabRef = useRef();
    let itemWidths = useRef([]);
    const { categories, loading, error } = useFetchCategories()

    const viewabilityConfig = useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems.length > 0) {
            dispatch(setFocusTabIndex({ index: viewableItems[0].index }));
            scrollToIndex(viewableItems[0].index)
        }
    });

    const scrollToIndex = (index) => {
        const offset = itemWidths.current?.slice(0, index).reduce((a, b) => a + b, 0)
            + itemWidths.current[index] / 2
            - screenWidth / 2;
        tabRef.current?.scrollToOffset({ offset, animated: true });
    };


    const onItemPress = useCallback(itemIndex => {
        ref?.current?.scrollToIndex({
            animated: false, index: itemIndex
        })
    })

    const handleBeginDrag = (e) => {
        if (e.nativeEvent.pageX <= RANGE_SCROLL_PARENT_TAB || e.nativeEvent.pageX >= screenWidth - RANGE_SCROLL_PARENT_TAB) {
            ref.current?.setNativeProps({ scrollEnabled: false })
        }
    }

    const handleEndDrag = () => {
        ref.current?.setNativeProps({ scrollEnabled: true })
    }

    const handleItemLayout = (index, width) => {
        const newWidths = [...itemWidths.current]
        newWidths[index] = width;
        itemWidths.current = newWidths
    };

    const Tabs = () => (
        <View style={{ height: 60 }}>
            <FlatList
                ref={tabRef}
                data={categories}
                horizontal
                renderItem={({ item, index }) => <View onLayout={(event) =>
                    handleItemLayout(index, event.nativeEvent.layout.width)
                }>
                    <TabCategory index={index} item={item} onItemPress={() => onItemPress(index)} />
                </View>}
            />
        </View>
    )

    const ListCategoryContent = () => (
        <FlatList
            ref={ref}
            data={categories}
            style={{ flex: 1, width: screenWidth }}
            keyExtractor={(item) => item.title}
            horizontal
            bounces={false}
            onTouchStart={handleBeginDrag}
            onTouchEnd={handleEndDrag}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({item}) => {
                return <View style={{ width: screenWidth }}>
                    <VideoListItem param={item.param}/>
                </View>
            }}
            onViewableItemsChanged={onViewableItemsChanged.current}
            viewabilityConfig={viewabilityConfig.current}
        />
    )

    return (
        <View style={{ flex: 1 }}>
            <Tabs />
            <ListCategoryContent />
        </View>
    )
};

export default ExploreScreen