import React, { useEffect } from 'react';
import { StyleSheet, FlatList, Text, View, Image, Dimensions, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import useFetchVideos from '../hook/useFetchVideos';

const { width: screenWidth } = Dimensions.get('screen');

const VideoListItem = ({ param }) => {
    const { videos, loading, error, fetchMoreVideos, hasMore } = useFetchVideos(param);

    const renderItem = ({ item, index }) => (
        <View style={{ marginLeft: 12}}>
            <Image
                source={{ uri: item.thumbnailVideo }}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.contentWrap}>
                <Pressable>
                    <Image
                        source={{ uri: item.user.avatar }}
                        style={styles.avatar}
                    />
                </Pressable>
                <Text style={{ marginLeft: 6, color: "white" }}>{item.user.name}</Text>
            </View>
        </View>

    );

    return (
        <View>
            <FlatList
                data={videos}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center'}}
                numColumns={2}
                keyExtractor={(item, index) => `${item.title}-${index}`}
                onEndReached={hasMore ? fetchMoreVideos : undefined}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color={"#fc2740"} /> : null}
            />
            {error && <Text>Error: {error.message}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    title: {
        color: "white",
        fontWeight: 600,
        fontSize: 16
    },
    image: {
        width: screenWidth / 2 - 12,
        aspectRatio: 1,
        marginBottom: 12
    },
    avatar: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    contentWrap: {
        flexDirection: "row",
        marginLeft: 12,
        paddingVertical: 16,
        alignItems: "center",
        alignSelf: "flex-start"
    }
})

export default VideoListItem