import React from "react";
import BotCollection from './BotCollection';
const API_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"
class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: []
  }
  componentDidMount(){
    fetch(API_URL)
    .then(resp=>{
      if(!resp.ok){
        alert(`Houston we have a problem: ${resp.statusText}`)
      }
      return resp.json()
    })
    .then(data=>this.setState({bots: data}))
  }

  handleClick = (bot) => {
    console.log('bot', bot)
  }

  render() {
    return (
      <div>
        <BotCollection 
        handleClick={this.handleClick} 
        bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
