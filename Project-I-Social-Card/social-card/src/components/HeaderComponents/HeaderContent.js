import React from 'react';
import './Header.css';
import HCBanner from './HCBanner'
import HCContent from './HCContent'




export default function HeaderContent() {
    return (
        <div className="header-content">
            <HCBanner />
            <HCContent />
        </div>
    )
}

