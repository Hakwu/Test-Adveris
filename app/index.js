import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Pressable } from "react-native";
import { useFonts } from 'expo-font';
import image from "../assets/search.png";

import {Link} from "expo-router"

function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b ? b : a,
    paddingBottom: c ? c : a,
    paddingLeft: d ? d : (b ? b : a)
  }
}

export default function Page() {

  const [userInput, setUserInput] = useState('');

  const [loaded] = useFonts({
    ProductBold: require('../assets/fonts/product-sans-bold.ttf'),
    ProductRegular: require('../assets/fonts/product-sans-regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google</Text>
      <View style={styles.containerInput}>
        <TextInput style={styles.input}
        onChangeText={(userInput) => {setUserInput(userInput)}}
        />
      </View>
      <Image source={image}  style={styles.image}></Image>
      <View style={styles.groupBtn}>
      <View style={styles.Btn}>
        <Link style={{textAlign:'center', fontSize:8}} href="/result"> Recherche Google</Link>
      </View>
      <View style={styles.Btn}>
          <Pressable onPress={() => console.log('ok')}>
            <Text style={{fontSize:8}}>J'ai de la chance</Text>
          </Pressable>
      </View>
      </View>
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
    fontFamily: 'ProductBold',
    fontSize: 50,
    position:'absolute',
    top:"38%",
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
    top:"47.5%",
  },
  groupBtn: {
    position: 'absolute',
    top: 56+'%',
    width: 45 + '%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  Btn: {
    boxSizing: 'borderBox',
    width: 50+'%',
    marginLeft:10,
    left:-10,
    height:"300%",
    backgroundColor : '#dfe1e5',
    marginBottom: 0,
    fontFamily: 'ProductRegular',
    alignItems: 'center',
    justifyContent: 'center',
    ...padding(0 ,4.5),
  },
}); 
