import React from 'react'
import * as Notifications from 'expo-notifications'

import MainScreen from './src/screens/MainScreen'

export default function App () {
  React.useEffect(() => {
    requestPermissionsAsync()
  })

  return (
    <>
      <MainScreen/>
    </>
  )
}

const requestPermissionsAsync = async () => {
  const { granted } = await Notifications.getPermissionsAsync()
  if (granted) { return }

  await Notifications.requestPermissionsAsync()
}
