import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import App from "./App"
import Signup from "./pages/Signup"

export default function Routing () {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/home" element={<App/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Routes>
        </Router>
        </>
    )
}