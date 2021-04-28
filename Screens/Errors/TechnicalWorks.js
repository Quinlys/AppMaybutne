import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function TechnicalWorks() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../img/technicalWorks.png')}/>
            <Text style={styles.text}>
                Технічні роботи {"\n"}
                на сервері
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#373D5E',
        fontWeight: 'bold',
        marginTop: 80,
        fontSize: 28,
        lineHeight: 32,
        fontStyle: 'normal',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    img: {
        height: 275,
        width: 275
    }
});