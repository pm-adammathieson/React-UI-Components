import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faSyncAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'



export default function FooterContainer() {
  return (
    <div className="foot-cont">
        <div className="inner-foot-cont">
        <FontAwesomeIcon className="icon" icon={faComment} />
        <FontAwesomeIcon className="icon" icon={faSyncAlt} />
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </div>
    </div>
  )
}
