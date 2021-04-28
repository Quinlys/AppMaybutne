import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Load() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../img/enterImg.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: 126,
        width: 180
    }
});