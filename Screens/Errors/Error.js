import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Error() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../img/error.png')}/>
            <Text style={styles.text}>
                Упс... {"\n"}
                Щось пішло не так
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
        height: 284,
        width: 275
    }
});