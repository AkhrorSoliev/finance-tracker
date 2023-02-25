
function TransactionsForm() {
  return (
    <div className="bg-green-400 text-white px-3 py-4 rounded ">
        <h3 className="font-bold mb-3">Add a Transactions</h3>
        <form className="max-w-md">
          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-white  dark:text-gray-900 text-[13px]">
              email:
            </span>
            <input
              type="email"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>

          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-gray-900 dark:text-white text-[13px]">
              password:
            </span>
            <input
              type="number"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
        </form>
    </div>
  )
}

export default TransactionsForm