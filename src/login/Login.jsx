import { useState } from "react";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div className="max-w-xs mx-auto">
      <h1 className="mb-10 text-xl font-bold">Login</h1>
      <div className="mb-6">
        <form onSubmit={handleSubmit}>
          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-gray-900 dark:text-white text-[13px]">
              email:
            </span>
            <input
              type="email"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </label>

          <label className="mb-5 block">
            <span className="block mb-1 font-medium text-gray-900 dark:text-white text-[13px]">
              password:
            </span>
            <input
              type="password"
              id="default-input"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </label>
          <button className="border-2 border-emerald-500 px-3 py-1 rounded text-[13px] hover:bg-emerald-500 hover:text-white">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
