import React from 'react'

export default function HCBanner() {
    

    return (
        <div className="header-banner">
            <h1 className="header1">Lambda School</h1>
            <div className="items">
                <a className="samething" href="#">@LamdaSchool</a>
                <p className="samething">&middot;</p>
                <p className="samething">{new Date().getDate()} {new Date().toLocaleString('en-us', { month: 'short'})}</p>
            </div>
        </div>
    )
}
