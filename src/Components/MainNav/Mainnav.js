import React, { Component } from 'react';
import './Mainnav.css';

class Mainnav extends Component {
  render() {
    return (
      <div className="mainNavBar">
        <div className="mainNav container" id="mainNav">
          <ul className="menu float-right" data-dropdown-menu>
            <li>Home</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Mainnav;
