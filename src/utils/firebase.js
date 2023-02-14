import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs, doc, getDoc} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMuXmRLAbPi154nEQThf5RjhPxStzL8xY",
  authDomain: "reactjs-coder-principijuan.firebaseapp.com",
  projectId: "reactjs-coder-principijuan",
  storageBucket: "reactjs-coder-principijuan.appspot.com",
  messagingSenderId: "588718502233",
  appId: "1:588718502233:web:19f6fad135aece90355c48",
  measurementId: "G-7QL6TPS25J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export async function gFetch(){
    const productsCollectionRef = collection (db, "productos")
    // getDocs(productsCollectionRef).then( snapshot => {
    //     const docsData = snapshot.docs.map( doc => doc.data())
    //     console.log(docsData)
    // })
    const snapshot = await getDocs(productsCollectionRef)
    const docsData = snapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id}
    })
    return(docsData)
}

export async function gFetchOk(detailId){
  const productsCollectionRef = collection (db, "productos")
  const productRef = doc(productsCollectionRef, detailId)
  const snapshot = await getDoc(productRef)
  return {...snapshot.data(), id: snapshot.id}
}