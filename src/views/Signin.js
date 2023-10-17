import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../config/firebase'

function Signin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const signin = async () => {
        try {
            await login(email, password)
            navigate('/')

        } catch (e) {
            alert(e.message)
        }
    }

    return (
        <div className='loginContainer'>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
            <button className='btn' onClick={signin}>Login</button>
            <center>
                <p>Don't have an account?<span style={{ cursor: 'pointer', color: 'blue' }} onClick={() => navigate('/signup')}> Sign Up</span></p>
            </center>
        </div>
    )
}

export default Signin
