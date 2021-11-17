import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, Switch } from 'react-native'
import * as Notifications from 'expo-notifications'

import AppBar from '../components/AppBar'
import { storage } from '../Storage'

export default function MainScreen () {
  const announceText: string = 'いいから\nコードを書け！！'
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

      <View style={styles.mainContent}>
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
      body: announceText,
      sound: 'default'
    },
    trigger: {
      seconds: 60 * 60,
      repeats: true
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
  mainContent: {
    flex: 1,
    justifyContent: 'center'
  },
  announceContent: {
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
  }
})
