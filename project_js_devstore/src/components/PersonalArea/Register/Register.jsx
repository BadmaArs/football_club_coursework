import './Register.scss';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { fetchNewUserApi } from '../../../utils/api';
const Register = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const inputChangeUserName = (e) => {
        setUserName(e.target.value)
    }
    const inputChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const inputChangePass = (e) => {
        setPass(e.target.value)
    }
    const newUser = {
        username: userName,
        email: email,
        password: pass,
    }
    const hundleRegister = (newUser) => {
        fetchNewUserApi(newUser)
    }
    return (
        <>
            <div className='register-main'>
                <div className="register-container">
                    <div className="register-container-welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <form action="" className="register-container-form">
                        <div className="register-container-form-input">
                            <input 
                                type="text" 
                                placeholder='Name'
                                value={userName}  
                                onChange={inputChangeUserName}  
                            />
                        </div>
                        <div className="register-container-form-input">
                            <input 
                                type='email' 
                                placeholder='E-mail'
                                value={email}
                                onChange={inputChangeEmail}
                            />
                        </div>
                        <div className="register-container-form-input">
                            <input 
                                type="password" 
                                placeholder='Password'
                                value={pass}
                                onChange={inputChangePass}
                            />
                        </div>
                    </form>
                    <div className="register-container-link-login">
                        <p className='register-container-transition'>If you have an account</p>
                        <p className="register-container-link" onClick={() => navigate("/login")}>press here</p>
                    </div>
                    <div className="register-container-buttom">
                        <div className="buttom" onClick={() => {hundleRegister(newUser)}}>Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register