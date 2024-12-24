import React from 'react';
import PropTypes from 'prop-types';
import styles from './Chip.module.scss';
import MetaMask from 'shared/assets/icons/metamask.svg';
import Copy from 'shared/assets/icons/copy.svg'

export const WalletChip = ({children, onClick}) => {
    return (
        <div className={styles.chip}>
            <div>
                <img src={MetaMask} alt="MetaMask" width="18" height="18"/>
            </div>

            <div>
                <span>{children}</span>
            </div>

            <div onClick={onClick} title="Copy Clipboard">
                <img src={Copy} width="16" height="16" alt="Copy"/>
            </div>
        </div>
    );
};

WalletChip.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

