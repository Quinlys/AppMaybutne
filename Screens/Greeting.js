import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Greeting() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Вітаємо тебе у спільноті Maybutne.UA!{"\n"}
                {"\n"}
                Тут ти зможеш у кілька простих кліків змінити чиєсь життя. Допомагати просто!{"\n"}
                {"\n"}
                Кожна нужденна родина в нашому додатку виставляє власний список потреб. Обери, що ти хочеш подарувати, забронюй цю річ та відправ посилку. Не бронюй те, що не зможеш відправити протягом двох днів. Інформація про кожну родину перевірена фондом "Я майбутнє України"{"\n"}
                {"\n"}
                Ти можеш обрати родину, яка проживає недалеко від тебе, або виконати пошук за конкретними потребами, чи подивитися загальний список.{"\n"}
            </Text>
            <Button style={styles.button} title="Згоден"/>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 100,
        backgroundColor: 'black',
        color: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        marginLeft: 32,
        marginRight: 32,
        color: '#7E7E7E'
    }
});