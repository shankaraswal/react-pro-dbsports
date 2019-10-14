import React, { Component } from 'react';
import axios from "axios";
const data = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal';

class Soccerplayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    }
    console.log(this.state);
  }
  componentDidMount() {
    var _this = this;
    axios.get(data)
    .then(function(res){
      _this.setState({
        players: res.data.player
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }
  render() {
    const playerList = this.state.players.map(function(item, key) {
      return (
        <div className="col-md-4" key={item.idPlayer}>
        <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{item.strPlayer}</h4>
          </div>
          <div className="card-body">
            <img className="card-img-top" src={item.strThumb} alt={item.strPlayer} />
            <ul className="list-unstyled mt-3 mb-4">
              <li><b>Signing : <span className="text-danger">{item.strSigning}</span></b></li>
              <li>Position: {item.strPosition}</li>
              <li>Nationality: {item.strNationality}</li>
              <li>Team: {item.strTeam}</li>
              <li>DOB: {item.dateBorn}</li>
            </ul>
            <button type="button" data-player-id={item.idPlayer} className="btn btn-md btn-block btn-outline-info">About {item.strPlayer} </button>
          </div>
          </div>
        </div>
      )
    });

    return (
      <section className="container playerListBucket">
        <div className="py-5 row">
          {playerList}
        </div>
      </section>
      
    );
  }
}
 
export default Soccerplayers;


