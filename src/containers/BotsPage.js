import React from "react";
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy'
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
    if(!this.state.army.includes(bot)){
      const newArmy = [...this.state.army, bot]
      this.setState({army: newArmy})
    }else{
      alert("You already did that!")
    }
  }
  handleRemove = (bot) =>{
    console.log('removing bot', bot)
    const botIndex = this.state.army.indexOf(bot)
    const newArmy = this.state.army.slice()
    //delete from our army
    newArmy.splice(botIndex,1)
    this.setState({army:newArmy})
  }

  render() {
    return (
      <div>
        <BotArmy 
        bots={this.state.army}
        handleRemove={this.handleRemove} />
        <BotCollection 
        handleClick={this.handleClick} 
        bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
