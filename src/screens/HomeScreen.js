import React from 'react'
import { View, StyleSheet } from 'react-native'
import Button from '../components/Button'
import TopBar from '../components/TopBar'

export default function HomeScreen({ navigation }) {
  return (
    <>


      <TopBar title="Home" />
      <View style={styles.container}>
      //pull predictions from PyTorch Model, running Flask
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
