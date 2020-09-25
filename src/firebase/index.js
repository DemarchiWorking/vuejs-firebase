import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

export const firebaseApp = firebase.initializeApp({
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_PROJECT_ID,
    storageBucket: process.env.VUE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
})
export default function install (Vue) {
    Object.defineProperty(Vue.prototype, '$firebase', {
        get () {
            return firebaseApp
        }
    })
}
/*
Importando do arquivo .env.local
C:\Users\antonio.demarchi\Desktop\TPS\Acessment_Vuejs\VUEJS\.env.local

VUE_APP_API_KEY = "AIzaSyDgWXH-lYVwRhoUAoJ64CYFMzrqjPwbmzY"
VUE_APP_AUTH_DOMAIN = "vuejs-b2dc9.firebaseapp.com"
VUE_APP_DATABASE_URL = "https://vuejs-b2dc9.firebaseio.com"
VUE_APP_PROJECT_ID = "vuejs-b2dc9"
VUE_APP_STORAGE_BUCKET = "vuejs-b2dc9.appspot.com"
VUE_APP_MESSAGING_SENDER_ID = "G-VWX63CBPGV"


*/