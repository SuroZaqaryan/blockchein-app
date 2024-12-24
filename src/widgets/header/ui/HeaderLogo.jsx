import React from 'react';
import styles from '../styles/Logo.module.scss';
import Logo from 'shared/assets/icons/logo.svg'

export const HeaderLogo = () => {
    return (
        <div className={styles['header-logo']}>
            <img src={Logo} alt="logo" />
        </div>
    );
};
