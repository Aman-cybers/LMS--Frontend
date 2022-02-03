import React from "react"
import '../Style/HomePage.css'
import { Link } from "react-router-dom"
function HomePage() {
    return (
        <div >
            <h2 className="lms">Learning Management System</h2>
            <div className='homepage-div'>
                <Link to='/admin'><button className='a-btn'>
                    Admin
                </button></Link>


                <Link to='/Faculty'><button className='f-btn'>
                    Faculty
                </button></Link>

                <Link to='/Student'>
                    <button className='s-btn'>
                        Student
                    </button>
                </Link>

            </div>
        </div>

    )
}

export default HomePage