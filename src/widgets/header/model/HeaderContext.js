import React, { createContext, useState } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <HeaderContext.Provider value={{ menuOpen, toggleMenu }}>
            {children}
        </HeaderContext.Provider>
    );
};
