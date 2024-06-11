import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { EXPO_FIREBASE_KEY } from '@env'
import { EXPO_FIREBASE_DOMAIN } from '@env'
import { EXPO_FIREBASE_ID } from '@env'
import { EXPO_FIREBASE_BUCKET } from '@env'
import { EXPO_FIREBASE_SENDERID } from '@env'
import { EXPO_FIREBASE_APPID } from '@env'
import { EXPO_FIREBASE_MEASUREMENTID } from '@env'

const firebaseConfig = {
  apiKey: EXPO_FIREBASE_KEY,
  authDomain: EXPO_FIREBASE_DOMAIN,
  projectId: EXPO_FIREBASE_ID,
  storageBucket: EXPO_FIREBASE_BUCKET,
  messagingSenderId: EXPO_FIREBASE_SENDERID,
  appId: EXPO_FIREBASE_APPID,
  measurementId: EXPO_FIREBASE_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);