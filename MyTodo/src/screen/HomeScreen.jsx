import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={{
        width:"auto",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    }}>
      <Text style={{
        color:"red",
        fontSize:25,
        }}>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})