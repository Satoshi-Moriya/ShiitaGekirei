import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'
import * as Notifications from 'expo-notifications'

import AppBar from '../components/AppBar'
import { storage } from '../Storage'

export default function MainScreen () {
  const announceText: string = 'ぐだぐだ\n言ってないで\nコードを\n書きなさい！！'
  const [isEnabled, setIsEnabled] = useState(false)
  const onOffText: string = isEnabled ? '有効' : '無効'

  useEffect(() => {
    storage.load({
      key: 'isEnabled'
    }).then(data => {
      setIsEnabled(data)
    }).catch(err => {
      setIsEnabled(false)
      console.log(err)
    })
  }, [])

  const toggleIsEnabled = () => {
    setIsEnabled(!isEnabled)
    storage.save({
      key: 'isEnabled',
      data: !isEnabled
    })
  }

  // on off ボタン
  if (isEnabled) {
    scheduleNotificationAsync(announceText)
  } else {
    Notifications.cancelAllScheduledNotificationsAsync()
  }

  return (
    <View style={styles.container}>

      <AppBar />

      <View>
        <View style={styles.announceContent}>
          <Text style={styles.announceText}>{announceText}</Text>
        </View>
        <View style={styles.onOffContent}>
          <Switch
            onValueChange={toggleIsEnabled}
            value={isEnabled}
          />
          <Text style={styles.onOffText}>{onOffText}</Text>
        </View>
        <View style={styles.noteContent}>
          <Text style={styles.noteText}>朝・昼・晩{'\n'}お知らせ！！</Text>
        </View>
      </View>
    </View>
  )
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
})

const scheduleNotificationAsync = async (announceText: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'シッタゲキレイ',
      body: announceText
    },
    trigger: {
      repeats: true,
      seconds: 60
    }
  })
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
