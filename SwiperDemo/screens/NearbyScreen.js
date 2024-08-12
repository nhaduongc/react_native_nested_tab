import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

import { imagesList } from '../data/images';

const DUMMY_DATA = [...imagesList, ...imagesList, ...imagesList].sort((a, b) => 0.5 - Math.random())
const { width } = Dimensions.get('screen');

const NearbyScreen = () => {
    const [dataList, setDataList] = useState([])

    useEffect(() => {
        setDataList(DUMMY_DATA)
    }, [])

    return (
        <ScrollView bounces={false} style={{ width: width }}>
            <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: 12, paddingVertical: 12 }}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: 600 }}>Enable location permissions</Text>
                <Text style={{ color: "#549af1", fontSize: 16, fontWeight: 600 }}>Allow</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: 'center', justifyContent: "space-evenly" }}>
                {dataList.map((item, index) => {
                    return (
                        <View key={index}>
                            <Image
                                source={{ uri: item }}
                                style={{ width: width / 2 - 12, aspectRatio: 1, marginBottom: 12 }}
                            />
                            <Text style={{ color: "white", fontWeight: 600, fontSize: 16 }}>Welcom to SmartDev</Text>
                            <View style={{ flexDirection: "row", marginLeft: 12, paddingVertical: 16, alignItems: "center", alignSelf: "flex-start" }}>
                                <TouchableOpacity>
                                    <Image
                                        source={{ uri: imagesList[0] }}
                                        style={{ width: 20, height: 20, borderRadius: 10 }}
                                    />
                                </TouchableOpacity>
                                <Text style={{ marginLeft: 6, color: "white" }}>Nha Duong</Text>
                            </View>
                        </View>

                    )
                })}
            </View>

        </ScrollView>
    )
}

export default NearbyScreen