import { useContext } from "react";
import { Context } from "../../utils/context";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
  } from "react-icons/fa";
import '../SingleProduct/SingleProduct.scss';
const PersonalArea = () => {
    const { userAuthorized, setUserAuthorized } = useContext(Context)
    console.log(userAuthorized.user.username)
    return (
        <>
            <div className="single-product-main-content">
                <div className="layout">
                    <div className="single-product-page">
                    <div className="left">
                        <img
                        src="https://www.visioninfosoft.com/wp-content/uploads/2016/02/Profile.jpg"
                        alt=""
                        />
                    </div>
                    <div className="right">
                        <span className="name">{userAuthorized.user.username}</span>
                        <span className="price">{userAuthorized.user.email}</span>
                        <span className="desc">{userAuthorized.user.createdAt}</span>
                        <span className="divider" />

                        <div className="info-item">
                        <span className="text-bold">
                            Share:
                            <span className="social-icons">
                            <FaFacebookF size={16} />
                            <FaTwitter size={16} />
                            <FaInstagram size={16} />
                            <FaLinkedinIn size={16} />
                            <FaPinterest size={16} />
                            </span>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalArea