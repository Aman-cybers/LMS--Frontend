import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react'
import HomePage from './Components/HomePage'
import Admin from './Components/Admin'
import Faculty from './Components/Faculty'
import Student from './Components/Student'
import AdminPage1 from './Components/AdminPage1'
import StudentSignup from './Components/StudentSignup'
import StudentHomePage from './Components/StudentHomePage'
import FacultySignup from './Components/FacultySignup'

function Routess() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/admin' element={<Admin />} />
                    <Route path='/Faculty' element={<Faculty />}></Route>
                    <Route path='/Student' element={<Student />} />
                    <Route path='/adminHomePage' element={<AdminPage1 />} />
                    <Route path='/StudentSignup' element={<StudentSignup />} />
                    <Route path='/StudentHomePage' element={<StudentHomePage />} />
                    <Route path='/FacultySignup' element={<FacultySignup />} />
                </Routes>

            </div>

        </Router>
    )
}
export default Routess;