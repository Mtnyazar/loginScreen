import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";

export default function NavigationStack() {
  const isLogin = false;
  return (
    <>
      {
        isLogin ? <UserStack /> : <AuthStack />
      }
    </>
  )
}

const styles = StyleSheet.create({})