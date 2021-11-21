import React from 'react'
import * as Notifications from 'expo-notifications'
import { requestTrackingPermissionsAsync } from 'expo-tracking-transparency'

import MainScreen from './src/screens/MainScreen'

export default function App () {
  React.useEffect(() => {
    requestPermissionsAsync()

    requestTrackingPermissionsAsyncFunc()
  })

  return (
    <MainScreen/>
  )
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync()
  if (granted) { return }

  await Notifications.requestPermissionsAsync()
}

const requestTrackingPermissionsAsyncFunc = async () => {
  const { status } = await requestTrackingPermissionsAsync()
  if (status === 'granted') {
    console.log('Yay! I have user permission to track data')
  }
}
