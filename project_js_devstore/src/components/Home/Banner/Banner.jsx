import "./Banner.scss";
import BannerImg from "../../../assets/ballBanner.png"

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                Nulla et tincidunt diam. 
                Praesent porttitor sagittis 
                consectetur. Donec eu auctor 
                tellus. Nam nulla neque, 
                </p>
                <div className="ctas">
                    <div className="banner-cta">READ MORE</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
