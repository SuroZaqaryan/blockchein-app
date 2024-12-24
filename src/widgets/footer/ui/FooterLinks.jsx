import React from 'react';
import styles from '../styles/Links.module.scss';

const FooterLinks = () => (
    <ul className={styles['footer-links']}>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
        <li><a href="/cookie">Cookie Policy</a></li>
    </ul>
);

export default FooterLinks;