import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

import PostItemTop from '../components/PostItemTop';
import ImagePostSwiper from '../components/ImagePostSwiper';

import { FollowDummyData } from '../data/followDummyData'

const FollowScreen = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        // Call API to get data
        const DUMMY_DATA = FollowDummyData
        setData(DUMMY_DATA)
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 12 }}>
            <PostItemTop image="https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" text="Post Hey" />
            {data?.map((item, index) => {
                if (item.type === 'imagePost') {
                    return <View key={`${item.type}-${index}`}>
                        <ImagePostSwiper userData={item.user} images={item.data.images} />
                    </View>
                }
            })}
        </ScrollView>

    )
}

export default FollowScreen