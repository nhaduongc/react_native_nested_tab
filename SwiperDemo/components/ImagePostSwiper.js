import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

import UserAvatartPost from './UserAvatarPost';

const { width: screenWidth } = Dimensions.get('screen');

const ImagePostSwiper = ({ userData, images }) => {
    return (
        <View style={{ marginBottom: 20 }}>
            <UserAvatartPost image={userData.avatar} text={userData.name} />
            <Swiper dotColor='white' activeDotColor={"#fc2740"} style={styles.imagesContainer}>
                {images.map((image, index) => {
                    return (
                        <View key={`${userData.name}-${index}`} style={{ flex: 1 }}>
                            <Image
                                source={{ uri: image }}
                                style={styles.image}
                            />
                        </View>

                    )
                })}
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    imagesContainer: {
        height: 350
    },
    image: {
        alignSelf: 'center',
        width: screenWidth,
        aspectRatio: 1,
        resizeMode: "cover"
    }
})

export default ImagePostSwiper