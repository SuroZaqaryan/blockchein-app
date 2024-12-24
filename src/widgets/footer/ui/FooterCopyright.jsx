import React from 'react';
import styles from '../styles/Copyright.module.scss';
import { formatYear } from '../lib/formatYear';

const FooterCopyright = () => (
    <div className={styles['footer-copyright']}>
        <p>© {formatYear()} All rights reserved. Powered by Atla</p>
    </div>
);

export default FooterCopyright;