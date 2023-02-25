import { BrowserRouter as Router, Routes, Route, redirect } from "react-router-dom"
// pages
import Home from './home/Home'
import Signup from './signup/Signup'
import Login from './login/Login'
import { useAuthContext } from "./hooks/useAuthContext"

// components
import Navbar from "./components/Navbar"

function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className="font-projectFont">
      {authIsReady &&
      <>
        <Router>
          <Navbar/>
          <div className="max-w-screen-md mx-auto mt-16 px-8">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/" element={user && <Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          </div>
        </Router>
      </>
      }
    </div>
  )
}

export default App
