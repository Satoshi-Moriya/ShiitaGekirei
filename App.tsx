import React from 'react'
import { initializeApp, getApps } from 'firebase/app'

import MainScreen from './src/screens/MainScreen'
import { firebaseConfig } from './env'

if (getApps().length < 1) {
  initializeApp(firebaseConfig)
}

export default function App () {
  return (
    <MainScreen />
  )
}
