import { db } from "../firebase";
import { collection, addDoc,getDocs,deleteDoc,doc } from "firebase/firestore";


export const addTransaction= async(userId, transaction)=>{
    await addDoc(collection(db,"users", userId ,"transactions"), transaction );
};

export const getTransanction= async(userId)=>{
    const querySnapshot= await getDocs(collection(db, "user",userId,"transaction"));
    return querySnapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}));
};

export const deleteTransaction= async(userId, transactionId)=>{
    await deleteDoc(doc(db, "user",userId,"transaction", transactionId))
};

