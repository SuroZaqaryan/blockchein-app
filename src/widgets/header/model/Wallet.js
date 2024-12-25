import { ethers } from 'ethers';

export const connectWallet = async () => {
    if (!window.ethereum) {
        throw new Error('MetaMask is not installed!');
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send('eth_requestAccounts', []);
    const network = await provider.getNetwork();

    if (network.chainId !== 80001) {
        throw new Error('Please switch to the Mumbai Testnet!');
    }

    return accounts[0]; // Возвращает адрес кошелька
};

export const checkWalletConnection = async () => {
    if (!window.ethereum) return null;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.listAccounts();

    return accounts.length > 0 ? accounts[0] : null;
};
