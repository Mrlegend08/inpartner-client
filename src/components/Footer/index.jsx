import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer className='footer_start'>
        <div className="container">
            <div className="foter_logo_wrapper">
                <img className='footer_img_logo' src='./assets/images/logo.svg' alt="Site footer logo" />

                <span className='footer_description'>© 2022 Inpartner. All rights reserved.</span>

            </div>
            

        </div>

    </footer>
    </>
  )
}

export default Footer;