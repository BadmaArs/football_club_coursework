import './ToComeIn.scss';
import { useNavigate } from 'react-router';
const ToComeIn = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='to-come-in-main'>
                <div className="to-come-in-container">
                    <div className="to-come-in-container-welcome">
                        <h1>Welcome!</h1>
                    </div>
                    <form action="" className="to-come-in-container-form">
                        <div className="to-come-in-container-form-input">
                            <input type='email' placeholder='E-mail'/>
                        </div>
                        <div className="to-come-in-container-form-input">
                            <input type="password" placeholder='Password'/>
                        </div>
                    </form>
                    <div className="to-come-in-container-link-login">
                        <p className='to-come-in-container-transition'>If you don't have an account</p>
                        <p className="to-come-in-container-link" onClick={() => navigate("/register")}>press here</p>
                    </div>
                    <div className="to-come-in-container-buttom">
                        <div className="buttom">Register</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ToComeIn