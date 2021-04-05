import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD3WTGksYsgIAIddizOPKoTrJAY8RFsPx8",
    authDomain: "dukan-db.firebaseapp.com",
    projectId: "dukan-db",
    storageBucket: "dukan-db.appspot.com",
    messagingSenderId: "150066722698",
    appId: "1:150066722698:web:2a51a45a52c607ffe6fa73"
};
export const createUserProfileDocument = async (userAuth, addionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addionalData
            })

        } catch (error) {
            console.log('eroor ', error.message)

        }
    }

    return userRef;


}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;