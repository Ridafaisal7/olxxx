import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../config/firebase'

function Signup() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signup = () => {
        register(email, password, firstName, lastName)
    }

    return (
        <div className='signupContainer'>
            <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
            <input style={{ padding: 7, marginRight: 10, width: 190 }} type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
            <input style={{ padding: 7, marginLeft: 20, width: 190 }} type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} /><br /><br />
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
            <button className='btn' onClick={signup}>Sign Up</button>
            <center>
                <p>Already have an account?<span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/signin')}> Login</span></p>
            </center>
        </div>
    )
}

export default Signup