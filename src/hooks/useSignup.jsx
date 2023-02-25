import {createUserWithEmailAndPassword, auth, updateProfile } from "../firebase/config"
import { useState } from "react"
import { useAuthContext } from './useAuthContext'

function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await createUserWithEmailAndPassword(auth, email, password)

            if (!res) {
                throw new Error('Could not complete signup')
            }
           
            await updateProfile(auth.currentUser, { displayName })

            // dispatch login action
            dispatch({type: "LOGIN", payload: res.user})

            setIsPending(false)
            setError(null)
        }
        catch(err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

  return {error, isPending, signup}
}

export  { useSignup }