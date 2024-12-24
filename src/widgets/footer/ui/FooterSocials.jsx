import React from 'react';
import styles from '../styles/Socials.module.scss';
import Facebook from 'shared/assets/icons/facebook.svg'
import Twitter from 'shared/assets/icons/twitter.svg'
import Youtube from 'shared/assets/icons/youtube.svg'
import Instagram from 'shared/assets/icons/instagram.svg'

const FooterSocials = () => (
    <div className={styles['footer-socials']}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook"/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter"/>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="Youtube"/>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram"/>
        </a>
    </div>
);

export default FooterSocials;