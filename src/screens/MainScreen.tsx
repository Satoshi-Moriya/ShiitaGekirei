import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import AppBar from '../components/AppBar'

export default function MainScreen () {
  return (
    <View style={styles.container}>

      <AppBar />

      <View>
        <View style={styles.announceContent}>
          <Text style={styles.announceText}>いいから{'\n'}コードを書け！！</Text>
        </View>
        <View style={styles.onOffContent}>
          <Text style={styles.onOffBtn}>ボタン</Text>
          <Text style={styles.onOffText}>無効</Text>
        </View>
        <View style={styles.noteContent}>
          <Text style={styles.noteText}>朝・昼・晩{'\n'}お知らせ！！</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
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
  },
  announceContent: {
    marginTop: 42,
    alignItems: 'center'
  },
  announceText: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 48,
    textAlign: 'center',
    color: '#555555'
  },
  onOffContent: {
    marginTop: 48,
    alignItems: 'center'
  },
  onOffText: {
    marginTop: 16,
    fontSize: 24,
    lineHeight: 36,
    color: '#555555'
  },
  noteContent: {
    marginTop: 32,
    alignItems: 'center'
  },
  noteText: {
    textAlign: 'center',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: 'bold',
    color: '#555555'
  }
})
