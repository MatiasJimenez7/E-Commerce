import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDocs, getDoc, query, where} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDwnJrXUKhyHdLSrB4ryp6f1iLiZTgdUK0",
    authDomain: "coderhouse-1a11b.firebaseapp.com",
    projectId: "coderhouse-1a11b",
    storageBucket: "coderhouse-1a11b.appspot.com",
    messagingSenderId: "633593706026",
    appId: "1:633593706026:web:4099b9ae611f106b03f553"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase)

export async function getItems() {

    const itemCollection = collection(appFirestore, "Pelotas")
    console.log(itemCollection)
    const pelotasSnapshot = await getDocs(itemCollection).then(data=>console.log("hola",data));
    console.log(pelotasSnapshot)

    let respuesta = pelotasSnapshot.docs.map( elem => {
        return{
            ...elem.data(),
            id: doc.id

        }
    }
    );

    return respuesta;

}


export async function traerUnProducto(Itemid){

    const docRef = doc(appFirestore,"Pelotas", Itemid);

    const docData = await getDoc(docRef);

    return {id: docData.id, ...docData.data()};
    }



export async function traerPorCategoria(categoryId){

    const itemCollection = collection(appFirestore, "Pelotas");
    const q = query(itemCollection, where("category", "==", categoryId));

    const pelotasSnapshot = await getDocs(q);

    let respuesta = pelotasSnapshot.docs.map( doc => {
        return{
            ...doc.data(),
            id: doc.id

        }
    })

    return respuesta;


}
export default appFirestore;