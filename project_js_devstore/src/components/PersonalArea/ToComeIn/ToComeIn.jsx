import { useContext, useState } from 'react';
import './ToComeIn.scss';
import { useNavigate } from 'react-router';
import { fetchUserApi } from '../../../utils/api';
import { Context } from '../../../utils/context';
const ToComeIn = () => {
    const { userAuthorized, setUserAuthorized} = useContext(Context)
    const navigate = useNavigate()
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')
    const inputChangeIdentifier = (e) => {
        setIdentifier(e.target.value)
    }
    const inputChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const userAuth = {
        identifier: identifier,
        password: password
    }

    const hundleLogIn = (userAuth) => {
        fetchUserApi(userAuth).then((res) => {
            setUserAuthorized(res)
            navigate('/personal-account') 
        })
    }
    return (
        <>
            <div className='to-come-in-main'>
                <div className="to-come-in-container">
                    <div className="to-come-in-container-welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <form action="" className="to-come-in-container-form">
                        <div className="to-come-in-container-form-input">
                            <input 
                                type='email' 
                                placeholder='E-mail'
                                value={identifier}
                                onChange={inputChangeIdentifier}    
                            />
                        </div>
                        <div className="to-come-in-container-form-input">
                            <input 
                                type="password" 
                                placeholder='Password'
                                value={password}
                                onChange={inputChangePassword}
                            />
                        </div>
                    </form>
                    <div className="to-come-in-container-link-login">
                        <p className='to-come-in-container-transition'>If you don't have an account</p>
                        <p className="to-come-in-container-link" onClick={() => navigate("/register")}>press here</p>
                    </div>
                    <div className="to-come-in-container-buttom">
                        <div className="buttom" onClick={() => {hundleLogIn(userAuth)}}>Log in</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToComeIn