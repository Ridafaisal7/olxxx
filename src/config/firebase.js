// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { getDoc } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWxTweoVe6mzCu04GgOuOi3rcL6GxKsf8",
  authDomain: "olx-firebase-699dd.firebaseapp.com",
  projectId: "olx-firebase-699dd",
  storageBucket: "olx-firebase-699dd.appspot.com",
  messagingSenderId: "1061051572258",
  appId: "1:1061051572258:web:ce27d213c3ddac6f92ea7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

async function register(email, password, firstName, lastName) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const docRef = await addDoc(collection(db, "users"), {
      firstName: firstName,
      lastName: lastName,
      Email: email
    });
    alert('Successfully Registered')
  } catch (e) {
    alert(e.message)
  }
}

function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}


async function postAd(title, description, price, file) {
  try {
    const url = await uploadImage(file)
    await addDoc(collection(db, "ads"), {
      title,
      description,
      price,
      imageUrl: url
    });
    alert('Ad posted successfully')
  } catch (e) {
    alert(e.message)
  }
}

async function uploadImage(file) {
  try {
    const storageRef = ref(storage, 'ads/' + file.name);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
  } catch (e) {
    alert(e.message)
  }
}

async function getAds() {
  const querySnapshot = await getDocs(collection(db, "ads"));
  const ads = []
  querySnapshot.forEach((doc) => {
    const data = doc.data()
    data.id = doc.id
    ads.push(data)
    // console.log(ads)
  });
  return ads
}

async function detail(id) {
  const docRef = doc(db, "ads", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log(docSnap.data());
      const ads = docSnap.data()
    } else {
      console.log("Document does not exist")
    }
    return docSnap.data()
  } catch (error) {
    console.log(error)
  }
}

export { register, login, postAd, getAds, detail }
