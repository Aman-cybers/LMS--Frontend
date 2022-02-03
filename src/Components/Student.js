import '../Style/Student.css'
import Button from '@mui/material/Button';

function Faculty() {
    return (
        <div className='a-page'>
            <h2 className="lms">Learning Management System</h2>
            <h2>Student Login</h2>
            <form>
                <input type='text'
                    placeholder='Username'
                    className='u-input'
                /> <br></br>
                <input type='password'
                    placeholder='Password'
                    className='p-input'
                />
                <br></br>
                <Button variant="contained">Login</Button>

            </form>
        </div>

    )
}
export default Faculty;