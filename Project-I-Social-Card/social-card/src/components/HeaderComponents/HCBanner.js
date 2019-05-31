import React from 'react'

export default function HCBanner() {
    

    return (
        <div>
            <h1>Lambda School</h1>
            <a className="samething" href="#">@LamdaSchool</a>
            <p className="samething">.</p>
            <p className="samething">{new Date().getDate()} {new Date().toLocaleString('en-us', { month: 'short'})}</p>
        </div>
    )
}
