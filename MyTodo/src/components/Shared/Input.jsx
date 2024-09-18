import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Input() {
  return (
    <View>
      <View style={{
        marginTop: 12,
        height: 53,
        width: 350,
        borderRadius: 12,
        borderColor: "#1b7fc2",
        borderWidth: 1,
        flexDirection: "row",

      }} >

        <View style={{
          width: 45,

          height: 51,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Ionicons name='mail-outline' size={20} color={"#868e96"} />
        </View>

        <TextInput style={{
          marginLeft: 10,
          fontSize: 22,
          width: 280
        }} placeholder='E-Mail Adresinizi Giriniz'
        ></TextInput>

      </View>

      <View style={{
        marginTop: 12,
        height: 53,
        width: 350,
        borderRadius: 12,
        borderColor: "#1b7fc2",
        borderWidth: 1,
        flexDirection: "row",

      }} >

        <View style={{
          width: 45,

          height: 51,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Ionicons name='key-outline' size={20} color={"#868e96"} />
        </View>

        <TextInput style={{
          marginLeft: 10,
          fontSize: 22,
          width: 280
        }} placeholder='Parolanızı Giriniz'
          secureTextEntry
        ></TextInput>

      </View>

      <View style={{
        flexDirection: "row",

      }}>

        <TouchableOpacity style={{
          width: 351,
          height: 47,
          marginTop: 28,
          borderRadius: 10,
          backgroundColor:"#1b7fc2",
          alignItems: "center",
          justifyContent: "center"

        }}>
          <Text style={{
            fontSize:22,
            fontWeight:700,
            color:"white"
          }}>Giriş Yap</Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginTop:17,
        flexDirection:"row"

        }}>
        <Text style={{
          fontSize:15,
          color:"#868e96"

        }}>Hala bir hesabınız yokmu?</Text>
        <TouchableOpacity style={{
          marginLeft:7
        }}>
          <Text style={{
            fontWeight:700,
            fontSize:15,
            textDecorationLine:"underline",
            color:"#868e96"
          }}>Kayıt Olun</Text>
        </TouchableOpacity>
      </View>

    </View>

  )
}

const styles = StyleSheet.create({})