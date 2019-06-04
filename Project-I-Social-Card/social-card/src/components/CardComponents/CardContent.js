import React from 'react';
import './Card.css';


export default function CardContent() {
    return (
        <div className="content">
            <div className="innerContent">
                <h2 className="cont-h2">Get Started With React</h2>
                <p className="cont-p"> React makes it painless to make interactive UI's. Design simple views
                    for each state in your application.
                </p>
                <a className="cont-anchor" href="http://reactjs.org">reactjs.org</a>
            </div>
        </div>
    )
}

