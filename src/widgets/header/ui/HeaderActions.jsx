import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connectWallet, checkWalletConnection } from '../model/Wallet.js';
import { formatAddress } from '../lib/formatAddress';
import styles from '../styles/Action.module.scss';
import { Button } from 'shared/ui/Button';
import { WalletChip } from 'shared/ui/WalletChip';

export const HeaderActions = () => {
    const [wallet, setWallet] = useState({ address: null, isLoading: false });

    const handleConnect = async () => {
        setWallet((prev) => ({ ...prev, isLoading: true }));
        try {
            const address = await connectWallet();
            setWallet({ address, isLoading: false });
        } catch (error) {
            toast.error(error?.message || 'Connection failed');
            setWallet((prev) => ({ ...prev, isLoading: false }));
        }
    };

    const copyAddress = () => {
        if (wallet.address) {
            navigator.clipboard.writeText(wallet.address)
                .then(() => toast.success('Address copied to clipboard!'))
                .catch(() => toast.error('Failed to copy address'));
        }
    };

    const handleWalletConnection = async () => {
        const connectedAddress = await checkWalletConnection();
        setWallet((prev) => ({ ...prev, address: connectedAddress }));
    };

    const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
            setWallet({ address: accounts[0], isLoading: false });
            toast.success('Wallet unlocked!');
        } else {
            setWallet({ address: null, isLoading: false });
        }
    };

    const handleChainChanged = (chainId) => {
        if (parseInt(chainId, 16) !== 80001) {
            toast.error('Please switch to the Mumbai Testnet!');
        }
    };

    useEffect(() => {
        handleWalletConnection();

        if (window.ethereum) {
            window.ethereum.on('accountsChanged', handleAccountsChanged);
            window.ethereum.on('chainChanged', handleChainChanged);
        }

        return () => {
            if (window.ethereum) {
                window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
                window.ethereum.removeListener('chainChanged', handleChainChanged);
            }
        };
    }, []);

    return (
        <div className={styles['header-actions']}>
            {wallet.address ? (
                <WalletChip onClick={copyAddress}>
                    {formatAddress(wallet.address)}
                </WalletChip>
            ) : (
                <Button onClick={handleConnect} isLoading={wallet.isLoading}>
                    Connect Wallet
                </Button>
            )}

            <ToastContainer position="top-left" />
        </div>
    );
};
