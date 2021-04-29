import React from 'react';
import Load from "./Screens/Load";
import Error from "./Screens/Errors/Error";
import TechnicalWorks from "./Screens/Errors/TechnicalWorks";
import { StyleSheet, View } from 'react-native';
import Greeting from "./Screens/Greeting";


export default function App() {
  return (
    <View style={styles.container}>

      <Greeting/>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});