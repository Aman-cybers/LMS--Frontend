import { Component } from "react";
import { Link } from 'react-router-dom'

export default class AdminPage1 extends Component {
    render() {
        return (
            <div>
                <Link to='/StudentSignup'><button>Add Student</button></Link><br />
                <button>Add Faculty</button>
            </div>
        )
    }
}