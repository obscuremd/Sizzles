import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { EXPO_FIREBASE_KEY } from '@env'
import { EXPO_FIREBASE_DOMAIN } from '@env'
import { EXPO_FIREBASE_ID } from '@env'
import { EXPO_FIREBASE_BUCKET } from '@env'
import { EXPO_FIREBASE_SENDERID } from '@env'
import { EXPO_FIREBASE_APPID } from '@env'
import { EXPO_FIREBASE_MEASUREMENTID } from '@env'



// const key = import.meta.env.VITE_FIREBASE_KEY;
// const domain = import.meta.env.VITE_FIREBASE_DOMAIN;
// const id = import.meta.env.VITE_FIREBASE_ID;
// const bucket = import.meta.env.VITE_FIREBASE_BUCKET;
// const senderId = import.meta.env.VITE_FIREBASE_SENDERID;
// const appId = import.meta.env.VITE_FIREBASE_APPID;
// const measurementId = import.meta.env.VITE_FIREBASE_MEASUREMENTID;

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