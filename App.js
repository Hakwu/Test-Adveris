import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput, Image } from 'react-native';
import { useFonts } from 'expo-font';
import image from "./assets/search.png";


export default function App() {
  const [userInput, setUserInput] = useState('');

  const [loaded] = useFonts({
    ProductBold: require('./assets/fonts/product-sans-bold.ttf'),
    ProductRegular: require('./assets/fonts/product-sans-regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input}
        onChangeText={(userInput) => {setUserInput(userInput); console.log(userInput)}}
        >
        </TextInput>
      </View>

      <Image source={image}  style={styles.image}></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'ProductBold'
  },
  containerInput: {
    borderRadius: 24,
    maxWidth: 584, 
    height: 44,
    margin: 12,
    borderColor: '#dfe1e5',
    borderWidth: 1,
    width: 80+'%',
    padding: 10,

  },
  input: {
    backgroundColor: 'white',
    width: 80+'%',
    top:10+'%',
    left:10+'%',
  },
  image: {
    width: "5%",
    height: "5%",
    resizeMode:'contain',
    position:'absolute',
    left:"13%",
    top:"48.5%",
  }
}); 
