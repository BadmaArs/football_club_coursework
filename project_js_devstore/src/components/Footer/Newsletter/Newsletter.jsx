import "./Newsletter.scss";
import { 
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return <div className="newlatter-selection">
        <div className="newslatter-content">
            <span className="small-text">Подписаться на рассылку</span>
            <span className="big-text">Подпишитесь на последние обновления и предложения</span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Будет использоваться в соответствии с нашей Политикой конфиденциальности</div>
            <div className="social-icons">
                <div className="icon">
                    <FaFacebookF size={14} />
                </div>
                <div className="icon">
                    <FaTwitter size={14} />
                </div>
                <div className="icon">
                    <FaInstagram size={14} />
                </div>
                <div className="icon">
                    <FaLinkedinIn size={14} />
                </div>
            </div>
        </div>
    </div>;
};

export default Newsletter;
