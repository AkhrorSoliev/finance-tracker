import React from 'react'
import TransactionsForm from './TransactionsForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

function Home() {
  const {user} = useAuthContext()
  const {documents, error} = useCollection('transactions')
  console.log(documents && documents)
  return (
    <div className='flex justify-between'>
      <div>
        {error && <p>{error}</p>}
      </div>
      <div>
        <TransactionsForm uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home