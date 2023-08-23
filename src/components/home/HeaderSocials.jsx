import React from 'react';
import { FaGithub,  FaLinkedinIn, FaTwitter, FaDev } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si'

const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/akashmiskar' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            {/* <a href='https://hashnode.com/@gregsithole' className='home__social-link' target='_blank' rel='noreferrer'>
                <SiHashnode />
            </a> */}

            <a href='https://dev.to/miskarakash' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaDev />
            </a>

            <a href='https://www.linkedin.com/in/akash-miskar-39567414b/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href="https://miskarakash@gmail.com" className='home__social-link' target='_blank' rel='noreferrer'>
                <SiGmail />
            </a>

            <a href='/' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
