import React, { useState } from "react";
import Button from '@mui/material/Button';
import '../Style/StudentSignup.css'

function StudentSignup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function registerUser(event) {
        event.preventDefault()
        const response = await fetch('http://localhost:1337/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                username,
                password
            })
        })
        const data = await response.JSON()
        console.log(data)
    }
    return (
        <div>
            <div className='a-page'>
                <h2 className="lms">Learning Management System</h2>
                <h2>Student Signup by admin</h2>
                <form onSubmit={registerUser}>
                    <input value={name}
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                        placeholder='Name'
                        className='u-input'
                    /> <br></br>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type='text'
                        placeholder='Email'
                        className='u-input'
                    /> <br></br>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type='text'
                        placeholder='Username'
                        className='u-input'
                    /> <br></br>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='Password'
                        className='p-input'
                    />
                    <br></br>
                    <Button type='submit' variant="contained">Login</Button>

                </form>
            </div>
        </div>
    )
}
export default StudentSignup;