// ADD USER

import { getDatabase, ref, set,push, onValue, remove,update } from "firebase/database";
import firebase from "./firebase"
import {useState,useEffect} from "react"
import { ToastifyDelete, ToastifyAdd, ToastifyUpdate } from "./toastify";


export const AddUser=(info)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"user/")
    const newUserRef=push(userRef)

    set(newUserRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })
     ToastifyAdd("Contact Added");
  
}

// READ INFO
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [contactList,setContactList]= useState()
    useEffect(() => {
        const db=getDatabase(firebase)
        const userRef=ref(db,"user/")

        onValue(userRef,(snapshot)=>{
            const data = snapshot.val();
            const userArray=[]

            for(let id in data){
                userArray.push({id,...data[id]})
            }
            setContactList(userArray)
            setIsLoading(false)
        })
       
    },[])
    return {isLoading,contactList}

}

export const DeleteUser=(id)=>{
    const db = getDatabase(firebase);
    // const userRef=ref(db,"user/")
    remove(ref(db,"user/"+id))
    ToastifyDelete("Deleted Successfully");

}

export const UpdateUser=(info)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"user/")

    const updates = {};

    updates["user/"+info.id]=info

    ToastifyUpdate("Contact Updated!");
    return update(ref(db), updates);

}