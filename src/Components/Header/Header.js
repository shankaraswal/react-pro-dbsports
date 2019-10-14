import React, { Component } from 'react';
import './Header.css';
import LocationBucket from '../LocationBucket/Locationbucket';
import SiteLogo from '../SiteLogo/Sitelogo';
import TopButtons from '../TopButtons/Topbuttons';
import MainNav from '../MainNav/Mainnav';

class Header extends Component {
  render() {
    return (
      <section className="grid-container headerBucket">
        <header className="header" id="header">
          <div className="top-bar topBar row">
            <LocationBucket /> 
            <SiteLogo /> 
            <TopButtons />
          </div>
          <div className="top-bar lowerBar grid-x">
          <MainNav />
          </div>
        </header>
      </section>
    );
  }
}

export default Header;
