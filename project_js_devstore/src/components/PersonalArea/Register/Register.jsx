import './Register.scss';
const Register = () => {
    return (
        <>
            <div className='register-main'>
                <div className="register-container">
                    <div className="register-container-welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <form action="" className="register-container-form">
                        <div className="register-container-form-input">
                            <input type="text" placeholder='Name'/>
                        </div>
                        <div className="register-container-form-input">
                            <input type='email' placeholder='E-mail'/>
                        </div>
                        <div className="register-container-form-input">
                            <input type="password" placeholder='Password'/>
                        </div>
                    </form>
                    <div className="register-container-link-login">
                        <p className='register-container-transition'>If you have an account</p>
                        <p className="register-container-link">press here</p>
                    </div>
                    <div className="register-container-buttom">
                        <div className="buttom">Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register