import React from 'react';
import styles from './styles/Header.module.scss';
import {HeaderLogo} from './ui/HeaderLogo';
import {HeaderActions} from './ui/HeaderActions';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.empty}/>
            <HeaderLogo/>
            <HeaderActions/>
        </header>
    );
};
