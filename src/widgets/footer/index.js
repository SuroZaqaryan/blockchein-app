import React from 'react';
import FooterLinks from './ui/FooterLinks';
import FooterLogo from './ui/FooterLogo';
import FooterSocials from './ui/FooterSocials';
import FooterCopyright from './ui/FooterCopyright';
import styles from './styles/Footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles['footer-wrapper']}>
            <div className={styles['footer-container']}>
                <FooterLinks/>
                <FooterLogo/>
                <FooterSocials/>
            </div>

            <FooterCopyright/>
        </div>
    </footer>
);