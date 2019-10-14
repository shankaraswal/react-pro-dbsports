import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <section className="grid-container searchBarBucket">
        <div className="bd-example searchBar">
            <label className="mr-sm-2" >Preference</label>
            <select className="custom-select mb-2 mr-sm-2 mb-sm-0" id="inlineFormCustomSelect">
              <option defaultValue="All">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
        </div>
      </section>
    )
  }
}

export default Searchbar;
