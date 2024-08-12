import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const PostItemTop = ({ image, text }) => (
    <View style={styles.container}>
        <Pressable>
            <Image
                source={{ uri: image }}
                style={styles.image}
            />
        </Pressable>
        <Text style={styles.text}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginLeft: 12,
        paddingVertical: 16,
        alignItems: "center",
        alignSelf: "flex-start"
    },
    image: {
        width: 60, height: 60,
        borderRadius: 30
    },
    text: {
        marginTop: 16,
        color: "white"
    }
})

export default PostItemTop