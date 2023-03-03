import { useState, useEffect } from "react"
import { useFirestore } from "../hooks/useFirestore"


function TransactionsForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')
  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      name, amount, uid
    })
  }
  
  useEffect(()  => {
    console.log("Response:", response)
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <div className="bg-green-400 text-white px-3 py-4 rounded ">
        <h3 className="font-bold mb-3 text-center">Add a Transactions</h3>
        <form onSubmit={handleSubmit} className="max-w-md">
          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-white  dark:text-gray-900 text-[13px]">
              Name:
            </span>
            <input
              type="text"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {setName(e.target.value)}}
              value={name}
            />
          </label>
          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-white  dark:text-gray-900 text-[13px]">
              Amount:
            </span>
            <input
              type="number"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {setAmount(e.target.value)}}
              value={amount}
            />
          </label>
          <button className="border-2 border-white px-3 py-1 rounded text-[13px] hover:bg-white hover:text-emerald-500">Submit</button>
        </form>
    </div>
  )
}

export default TransactionsForm