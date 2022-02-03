import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './Components/HomePage'
import Admin from './Components/Admin'
import Faculty from './Components/Faculty'
import Student from './Components/Student'

function Routess() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/Faculty' element={<Faculty />}></Route>
                    <Route path='/Student' element={<Student />} />
                </Routes>

            </div>

        </Router>
    )
}
export default Routess;