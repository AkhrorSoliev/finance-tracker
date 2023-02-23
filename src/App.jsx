import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// pages
import Home from './home/Home'
import Signup from './signup/Signup'
import Login from './login/Login'

// components
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="font-projectFont">
      <Router>
        <Navbar/>
        <div className="max-w-screen-md mx-auto mt-16 px-8">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
