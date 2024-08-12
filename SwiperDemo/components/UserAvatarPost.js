import React from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

const UserAvatartPost = ({ image, text }) => (
    <View style={styles.container}>
        <Pressable >
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
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 12,
        paddingVertical: 16,
        alignItems: "center",
        alignSelf: "flex-start"
    },
    image: {
        width: 40, height: 40,
        borderRadius: 20
    },
    text: {
        marginLeft: 12,
        color: "white"
    }
})

export default UserAvatartPost