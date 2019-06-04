import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faSyncAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'



class FooterContainer extends React.Component {
  state = {
    sync: '1',
    like: '1'
  }

  render() {
    return (
    <div className="foot-cont">
        {/* <div className="inner-foot-cont">
        <FontAwesomeIcon className="icon" icon={faComment} />
        <FontAwesomeIcon icon={faSyncAlt} />
        <div className="display-box">{this.state.sync}</div>
        <FontAwesomeIcon className="icon" icon={faHeart} />
        <div className="display-box">{this.state.like}</div>
        <FontAwesomeIcon className="icon" icon={faEnvelope} /> */}
        <i class="fas fa-comment"></i>
      {/* </div> */}
    </div>
    )
  }
}

export default FooterContainer