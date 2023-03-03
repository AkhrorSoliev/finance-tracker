import { useReducer, useEffect, useState } from "react";
import  { getDocs, collection, projectFirestore, addDoc, Timestamp } from '../firebase/config'

let initialState = {
    document:null,
    isPending: false,
    error: null,
    success: null
}

const firesotreReducer = (state, action) => {
    switch(action.type) {
        case "IS_PENDING":
            return { isPending: true, document: null, success: false, error: null }
        case "ADDED_DOCUMENT":
            return { isPending: false, document: action.payload, success: true, error: null }
        case "ERROR":
            return { isPending: false, document: null, success: false, error: action.payload }
        default:
            return state;
    }
}

export const useFirestore = (collect) => {
    const [response, dispatch] = useReducer(firesotreReducer, initialState)
    
      let ref 
    // add a document => https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ru
    const addDocument =  async (doc) => {
        dispatch({type: "IS_PENDING"})
        try {
          ref = await getDocs(collection(projectFirestore, collect))
          const createdAt = Timestamp.fromDate(new Date())
          const addedDocument = await addDoc(collection(projectFirestore, collect), {...doc, createdAt})
          console.log(createdAt, addedDocument)
          dispatch({type:"ADDED_DOCUMENT", payload: addedDocument})
        }

        catch(err) {
            dispatch({ type:"ERROR", payload: err.message })
        }
    }

    // delete a document
    const deleteDocument = (id) => {

    }

    return {addDocument, deleteDocument , response}
}