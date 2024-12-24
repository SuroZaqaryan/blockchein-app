import React from 'react';
import styles from './styles/Header.module.scss';
import {HeaderLogo} from './ui/HeaderLogo';
import {HeaderActions} from './ui/HeaderActions';
import {HeaderProvider} from './model/HeaderContext';

export const Header = () => {
    return (
        <HeaderProvider>
            <header className={styles.header}>
                <div className={styles.empty} />
                <HeaderLogo/>
                <HeaderActions/>
            </header>
        </HeaderProvider>
    );
};
