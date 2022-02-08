import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import React, { useState } from "react";
import { Navigate } from 'react-router-dom';
import '../Style/Student.css'
function Student() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function loginUser(event) {
        event.preventDefault()

        const response = await fetch('http://localhost:1337/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        if (data.user) {
            alert('Login Successfull')
            return <Navigate to='/StudentHomePage' />
        }
        else {
            alert('Wring ID')
        }
        console.log(data)
    }

    return (
        <div className='s-page'>
            <h2 className="lms">Learning Management System</h2>
            <h2>Student Login</h2>
            <br></br>
            <form onSubmit={loginUser}>
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='text'
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Email"
                    className='ui-e-input'
                />
                <br></br>
                <br></br>
                <br></br>
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Password"
                    className='ui-e-input'
                />

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Button type='submit' variant="contained">Login</Button>

            </form>
        </div>

    )
}
export default Student;