import { StyleSheet, Text, View, Button, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from "expo-router"
import { usePathname } from "expo-router";

import ResultItem from './ResultItem';


import Backend from "../services/Backend";

export default function Result({input}) {
  const pathname = usePathname();
  const [result, setResult] = useState(null);

    useEffect(() => {
      const fetchResult = async () => {
          const response = await Backend.search('Apple');
          if (response.status === 200) {
            setResult(response.data)
            // console.log(response.data.products[0].thumbnail)
          }
      }

      fetchResult();
  }, []);
    const router = useRouter();
  return (
    (!result ? <ActivityIndicator size="small" color="white" /> :
    <View style={styles.container}>
      <View style={{position:'absolute',top:50,width:100+'%', height:5+'%', backgroundColor:'grey', display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
        <Button onPress={() => router.back()} title="<"></Button>
        <Text style={{color:'white', fontSize:10}}>Resultats ({result.total})</Text>
      </View>
      <FlatList data={result}
      renderItem={({ item }) => <ResultItem item={result} />}
      >

      </FlatList>
    </View>)
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,

  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
