import React from 'react'
import './Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faSyncAlt, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'



class FooterContainer extends React.Component {
  state = {
    sync: 0,
    like: 0
  }

  rePost = () => {
    this.setState({
      sync: +1
    })
  }

  like = () => {
    console.log('click')
    this.setState({
      like: +1
    })
  }


    
    render() {
      
      return (
    <div className="foot-cont">

        <div className="inner-foot-cont">
        <FontAwesomeIcon
          id="icon-1"
          className="icon"
          icon={faComment}
        />
        <div className="count-box">
          <FontAwesomeIcon 
            icon={faSyncAlt}
            onClick={this.rePost}
          />
          <span className="display-box">{this.state.sync}</span>
        </div>
        <div id="count-box-2" className="count-box">
          <FontAwesomeIcon 
            className="icon" 
            icon={faHeart} 
            onClick={this.like}
          />
          <span className="display-box">{this.state.like}</span>
        </div>
        <FontAwesomeIcon className="icon" icon={faEnvelope} /> 
        </div>
    </div>
    )
  }
}

export default FooterContainer