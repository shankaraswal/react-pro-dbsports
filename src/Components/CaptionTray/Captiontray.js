import React, { Component } from 'react';
import './Captiontray.css';
import Arrdown from '../../Images/svg/icn-arw-down.svg';

class Captiontray extends Component {
  render() {
    return (
      <div className="captionTray">
        <div className="downScrollBar"><figcaption className="">SCROLL DOWN TO EXPLORE MORE</figcaption>
          <a href="#" className="arwDown"><img src={Arrdown} /></a> 
        </div>
      </div>
    );
  }
}

export default Captiontray;
