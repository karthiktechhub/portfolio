// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBX49uK2GR5Xq1TpVKekXphgu9NoPXlOn8',
	authDomain: 'portfolio-ffe85.firebaseapp.com',
	projectId: 'portfolio-ffe85',
	storageBucket: 'portfolio-ffe85.appspot.com',
	messagingSenderId: '196022173822',
	appId: '1:196022173822:web:1adf9e0f09716aba34982f',
	measurementId: 'G-ELRN09F5BE',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
