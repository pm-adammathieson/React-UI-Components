import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import HCLogo from './HCLogo'


export default function HeaderContainer() {
    return (
        <div className="container">
            <HCLogo />
            <HeaderContent />
        </div>
    )
}



