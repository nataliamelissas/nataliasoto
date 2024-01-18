import React from "react";
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import etsyIcon from '../assets/etsy-icon.svg'

const ContactBanner: React.FC = () => {
    return (
        <div className='flex justify-center'>
            <a href='https://www.linkedin.com/in/nataliamsoto/'>
                <div className='w-12'>
                    <img src={linkedinIcon} alt="LinkedIn"/>
                </div>
            </a>
            <a href='http://github.com/nataliamelissas'>
                <div className='w-10 ml-5'>
                    <img src={githubIcon} alt="Github"/>
                </div>
            </a>
            <a href='http://etsy.com/shop/CharmBitsDesign'>
                <div className='w-10 ml-5'>
                    <img src={etsyIcon} alt="Etsy"/>
                </div>
            </a>
        </div>
    )
}

export default ContactBanner;