import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyARuzqJT8rUuK9lTHgGhpfGwFtHPVYwh2M",
  authDomain: "business-card-maker-2206f.firebaseapp.com",
  databaseURL: "https://business-card-maker-2206f.firebaseio.com",
  projectId: "business-card-maker-2206f",
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp
