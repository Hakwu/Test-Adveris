import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from "expo-router"
import { usePathname } from "expo-router";

import Backend from "../services/Backend";

export default function Result({input}) {
  const pathname = usePathname();

    useEffect(() => {
      console.log(pathname)
      const fetchProfile = async () => {
          const response = await Backend.search('Apple');
          if (response.status === 200) {
            console.log(response.data.products)
          }
      }

      fetchProfile();
  }, []);
    const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>Result.</Text>
        <Button onPress={() => router.back()} title="Go back"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
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
