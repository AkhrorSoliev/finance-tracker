import {useState} from 'react'
import { useAuthContext } from './useAuthContext'
import { signOut, auth } from '../firebase/config'
export function useLogout() {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()


    const logout = async () => {
        setError(null)
        setIsPending(true)

        try {
            await signOut(auth)
            dispatch({type: "LOGOUT"})

            setIsPending(false)
            setError(null)
        }
        catch (err) {
            console.log(err.message)
            setError(err.message)
        }
    }

  return {logout, isPending, error}
}

