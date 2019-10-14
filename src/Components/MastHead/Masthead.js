import React, { Component } from 'react';
import './Masthead.css';
import ImgMastHead from '../../Images/bnr-hero-1.jpg';
import CaptionTray from '../CaptionTray/Captiontray';
import MastheadImage from '../MastheadImage/Mastheadimage';

class Masthead extends Component {
  render() {
    return (
      <section className="grid-container mastHeadBucket" >
       <div className="text-center mastHead" id="mastHead">
          <MastheadImage />
          <CaptionTray />
        </div>

      </section>
    );  
  }
}

export default Masthead;
