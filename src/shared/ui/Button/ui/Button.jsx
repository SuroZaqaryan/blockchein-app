import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import Loader from 'shared/assets/icons/loader.gif';

export const Button = ({children, onClick, disabled = false, isLoading = false}) => {
    return (
        <button
            className={`${styles.button} ${isLoading ? styles.isLoading : ''}`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {isLoading ? (
                <div className={styles.loader}>
                    <img src={Loader} alt="Loading" width="20" height="20"/>
                    <span>Loading</span>
                </div>
            ) : (
                <span>{children}</span>
            )}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    isLoading: PropTypes.bool,
};

