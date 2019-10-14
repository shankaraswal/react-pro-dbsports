import React, { Component } from 'react';
import './Topbuttons.css';


class Topbuttons extends Component {
  render() {
    return (
      <div className="top-bar-right  col-md-3 rightCol text-right "> 
           <button type="button" className="btn btn-small btn-warning">Danger</button>
      </div>
    );
  }
}

export default Topbuttons;
