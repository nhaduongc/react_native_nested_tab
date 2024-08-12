import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';

const TabCategory = ({ item, index, onItemPress }) => {
    const exploreTabFocusIndex = useSelector(state => state.exploreTab.focusTabIndex)

    return (
        <Pressable style={{ padding: 12 }} onPress={onItemPress}>
            <Text style={{ color: exploreTabFocusIndex === index ? 'white' : 'gray', fontSize: 16 }}>{item.title}</Text>
        </Pressable>
    )
}

export default TabCategory
