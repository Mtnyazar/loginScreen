import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Input from '../Shared/Input'

export default function Login() {
  return (
    <View style={{
      backgroundColor: "#f7f7f7",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <View>
        <Image
          source={require('../../../assets/images/Auth-Logo.png')}
        />
      </View>
      <View>
        <Input/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})