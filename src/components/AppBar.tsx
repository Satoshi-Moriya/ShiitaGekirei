import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AppBar () {
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>シッタゲキレイ</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#FFCF87',
    justifyContent: 'flex-end'
  },
  appBarInner: {
    alignItems: 'center'
  },
  appBarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
})
