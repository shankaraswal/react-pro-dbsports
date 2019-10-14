import React, { Component } from 'react';
import axios from "axios";
import './Mastheadimage.css';

const data = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Arsenal';

class Mastheadimage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: []
    }
  }
  componentDidMount() {
    var _this = this;
    axios.get(data)
    .then(function(res){
      _this.setState({
        banner: res.data.player
      });
    })
    .catch(function(e) {
      console.log("ERROR ", e);
    })
  }
  GenerateRandomNumber=()=>
{
 
  var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
  console.log(RandomNumber);
  this.setState({
  
    NumberHolder : RandomNumber
  
  })
  }
  render() {
    const playerList = this.state.banner.map(function(item, key) {
      if(item.idPlayer == '34145402'){
      return (
        <figure key={item.idPlayer} className='bgMastHead' style ={ { backgroundImage: "url("+item.strFanart4+")" } }></figure>
        )
       }
    });

    return (
        <div className="imgMastHeadWrapper">
          {playerList}
        </div>

      
    );
  }
}
 
export default Mastheadimage;


