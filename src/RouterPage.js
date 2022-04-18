import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './landingpage/About'
import Home from './landingpage/Home'

export default function RouterPage() {

    return (
        <Router>
            <div className='router-page-container'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}