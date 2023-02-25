import React from 'react'
import TransactionsForm from './TransactionsForm'

function Home() {
  return (
    <div className='flex justify-between'>
      <div>
        <h1>List</h1>
      </div>
      <div>
        <TransactionsForm/>
      </div>
    </div>
  )
}

export default Home