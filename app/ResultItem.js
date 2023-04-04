import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native'
import React from 'react'


const ResultItem = ({item}) => {
    console.log(item)
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>

    </View>
  )
}

export default ResultItem

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignContent: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent:'center',
    },
    title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: 'red',
        textAlign:'left',
        paddingHorizontal:5+'%',
        width: '60%',
        // backgroundColor:'red'
    },
    description: {
        fontWeight:'300',
        color: 'yellow',
        textAlign:'left',
        paddingHorizontal:5+'%',

    }
})