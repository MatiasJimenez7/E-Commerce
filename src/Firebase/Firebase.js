import { initializeApp } from 'firebase/app';
import {
    getDoc,
    getFirestore,
    collection,
    setDoc,
    addDoc,
    getDocs,
    query,
    where,
    doc,
    runTransaction,
    writeBatch
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwnJrXUKhyHdLSrB4ryp6f1iLiZTgdUK0",
    authDomain: "coderhouse-1a11b.firebaseapp.com",
    projectId: process.env.REACT_APP_REACT_ENV_PROYECT,
    storageBucket: "coderhouse-1a11b.appspot.com",
    messagingSenderId: "633593706026",
    appId: "1:633593706026:web:4099b9ae611f106b03f553"
  };


// Initialize Firebase
initializeApp(firebaseConfig);
// Getting db
const db = getFirestore();

class FirebaseUtils {
    static isValidString(field) {
        return typeof field === 'string' && field !== '';
    }

    static isValid(field) {
        return field !== '';
    }

    static isValidOptions(options) {
        if (typeof options === 'object') {
            const isValidField = this.isValidString(options.field);
            const isValidCondition = this.isValidString(options.condition);
            const isValidValue = this.isValid(options.value);
            return isValidField && isValidCondition && isValidValue;
        }
        return false;
    }
}

export class Firebase {
    static getCollection(...pathSegments) {
        return collection(db, ...pathSegments);
    }

    static getDoc(...pathSegments) {
        return doc(db, ...pathSegments);
    }

    static get(path) {
        const pathSegments = path.split('/');
        const ref = this.getDoc(...pathSegments);
        return getDoc(ref);
    }

    static getAll(path, options) {
    const pathSegments = path.split('/');
    const ref = this.getCollection(...pathSegments);

    const isValid = FirebaseUtils.isValidOptions(options);
    if (isValid) {
        return getDocs(
        query(ref, where(options.field, options.condition, options.value))
        );
    }
        return getDocs(ref);
    }

    static set(path, obj) {
        const pathSegments = path.split('/');
        return setDoc(this.getDoc(...pathSegments), obj);
    }

    static add(path, obj) {
        const pathSegments = path.split('/');
        const ref = this.getCollection(...pathSegments);
        return addDoc(ref, obj);
    }

    static transaction(asyncFunc) {
        return runTransaction(db, asyncFunc);
    }

    static batch() {
        return writeBatch(db);
    }
}