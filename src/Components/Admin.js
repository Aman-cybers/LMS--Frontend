import '../Style/Admin.css'
import Button from '@mui/material/Button';
import { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Admin extends Component {

    constructor(props) {
        super()
        let loggedIn = false
        this.state = {
            username: '',
            password: '',
            loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        if (username === 'admin' && password === 'admin') {
            this.setState({
                loggedIn: true
            })
        }
        else {
            alert('Wrong ID')
            console.log('Wrong ID')
        }
    }


    render() {
        if (this.state.loggedIn) {
            return <Navigate to='/adminHomePage' />
        }

        return (
            <div className='a-page'>
                <h2 className="lms">Learning Management System</h2>

                <h2>Admin Login</h2>
                <form onSubmit={this.submitForm}>
                    <input type='text'
                        placeholder='Username'
                        name='username'
                        className='u-input'
                        value={this.state.username}
                        onChange={this.onChange}
                    /> <br></br>
                    <input type='password'
                        placeholder='Password'
                        className='p-input'
                        name='password'
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                    <br></br>
                    <Button type='submit' variant="contained">Login</Button>
                    <br /><br /><br />
                    <h4>To add Admin contact to lms@lms.com</h4>
                </form>
            </div>

        )
    }
}
