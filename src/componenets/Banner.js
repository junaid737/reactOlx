import React from 'react';
import Logo from '../images/banner.jpg'
import '../StyleSheet/Banner.css'

const Banner = () => {
    return (
        <div className="bannerContainer">
            <div>
                <img className="homeBanner" src={Logo} alt="Banner" />
            </div>
        </div>
    )
}

export default Banner