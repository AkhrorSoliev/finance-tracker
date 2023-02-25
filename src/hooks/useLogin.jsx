import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import { signInWithEmailAndPassword, auth } from '../firebase/config'
export function useLogin() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()


    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        try {
          const res = await signInWithEmailAndPassword(auth, email, password)
          console.log(res.user)
            dispatch({type: "LOGIN", payload: res.user})
            setIsPending(false)
            setError(null)
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

  return {login, isPending, error}
}

