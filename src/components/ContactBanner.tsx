import React from "react";
import linkedinIcon from '../assets/linkedin.svg';
import linkedBlackIcon from '../assets/linkedin-black.svg';
import githubIcon from '../assets/github.svg';
import { SOCIAL } from '../constants/content';

interface ContactBannerProps {
    linkedInBlack?: boolean;
}

const ContactBanner: React.FC<ContactBannerProps> = ({ linkedInBlack }) => {
    return (
        <div className='flex items-center gap-4'>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src={linkedInBlack ? linkedBlackIcon : linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
            </a>
        </div>
    );
};

export default ContactBanner;
