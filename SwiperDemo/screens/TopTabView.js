import React from 'react';
import { StyleSheet, Text, Animated, useWindowDimensions, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import FollowScreen from './FollowScreen';
import ExploreScreen from './ExploreScreen';
import NearbyScreen from './NearbyScreen';

const renderScene = SceneMap({
    '1': FollowScreen,
    '2': ExploreScreen,
    '3': NearbyScreen,
});

const renderLabel = ({ route, focused }) => {
    return <Text style={[styles.label, { color: focused ? 'white' : 'gray', }]}>{route.title}</Text>
};

const renderIndicator = ({ navigationState, position, getTabWidth }) => {
    const inputRange = navigationState.routes.map((_, i) => i);

    const translateX = position.interpolate({
        inputRange,
        outputRange: inputRange.map(i => {
            const tabWidth = getTabWidth(i);
            return i * tabWidth + (tabWidth - styles.indicator.width) / 2;
        }),
    });

    return (
        <Animated.View
            style={[
                styles.indicator,
                {
                    transform: [{ translateX }],
                },
            ]}
        />
    );
};


const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorContainerStyle={styles.indicatorContainerStyle}
        indicatorStyle={styles.indicatorStyle}
        labelStyle={styles.labelStyle}
        inactiveColor="gray"
        renderLabel={renderLabel}
        renderIndicator={renderIndicator}
        style={styles.tabBarStyle}
    />
);

export function TopTabView() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Follow' },
        { key: '2', title: 'Explore' },
        { key: '3', title: 'Nearby' },
    ]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    // indicator: {
    //     width: 30,             // Set the desired width of the indicator
    //     height: 3,             // Set the height of the indicator
    //     backgroundColor: 'red', // Customize the color of the indicator
    //     borderRadius: 2,        // Optional: make the indicator rounded
    // },
    tabBarStyle: {
        backgroundColor: 'transparent',
        marginHorizontal: 30
    },
    label: {
        textTransform: "none",
        fontWeight: 600,
        fontSize: 16
    },
    indicatorContainerStyle: {
        justifyContent: "flex-end"
    },
    indicator: {
        backgroundColor: '#fc2740',
        height: 3, width: 50
    },
    labelStyle: {
        color: "white",
        fontWeight: 600,
        fontSize: 16
    }
})

export default TopTabView