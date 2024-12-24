export const formatAddress = (address) =>
    address ? `${address.slice(0, 8)}...${address.slice(-4)}` : '';
