import React, { Component } from 'react';
import './Locationbucket.css';
import Location from '../../Images/svg/pin.svg';
import Phone from '../../Images/svg/phone.svg';
class Locationbucket extends Component {
  render() {
    return (
        <div className="top-bar-left cell col-md-3 leftCol">
            <a href="#"><img src={Location} className="icnPin" alt="Location" /></a>
            <a href="#"><img src={Phone}  className="icnPhone" alt="Phone" /></a>
            <span><a href="tel:202.408.2300">202.408.2300</a></span>
        </div>
    );
  }
}

export default Locationbucket;
