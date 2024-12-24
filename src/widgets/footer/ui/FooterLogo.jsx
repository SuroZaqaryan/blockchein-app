import React from 'react';
import styles from '../styles/Logo.module.scss';
import Logo from 'shared/assets/icons/logo.svg'

const FooterLogo = () => (
    <div className={styles['footer-logo']}>
        <img src={Logo} alt="logo"/>
    </div>
);

export default FooterLogo;