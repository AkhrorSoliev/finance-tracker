import {createUserWithEmailAndPassword, auth } from "../firebase/config"
import { useState } from "react"
function useSignup() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)

    const signup = async (email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            // signup user
            const res = await createUserWithEmailAndPassword(auth, email, password)
            console.log(res)

            if (!res) {
                throw new Error('Could not complete signup')
            }

            // add dispaly name to user
            await res.user.updateProfile({displayName})

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