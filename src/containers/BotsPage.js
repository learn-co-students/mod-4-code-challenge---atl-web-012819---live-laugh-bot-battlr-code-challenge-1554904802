import React from "react";
import BotCollection from './BotCollection';
import BotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

const API_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    bots: [],
    army: [],
    selectedBot: null,
    filterType: ""
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

  handleAdd = (bot) => {    
    if(!this.state.army.includes(bot)){
      const newArmy = [...this.state.army, bot]
      this.setState({
        army: newArmy,
        selectedBot:null
      })
    }else{
      alert("You already did that!")
    }
  }

  handleFilter = (e) =>{
    const newFilter = e.target.value
    this.setState({filterType: newFilter})
  }

  handleRemove = (bot) =>{
    console.log('removing bot', bot)
    const botIndex = this.state.army.indexOf(bot)
    const newArmy = this.state.army.slice()
    //delete from our army
    newArmy.splice(botIndex,1)
    this.setState({army:newArmy})
  }

  handleShow = (bot) => {
    console.log('showing bot', bot)
    this.setState({selectedBot:bot})
  }

  handleHide = () => {
    this.setState({selectedBot: null})
  }

  botsToShow(){
    return this.state.bots.filter((bot)=>{
      return bot.bot_class.includes(this.state.filterType)
    })
  }


  render() {
    return (
      <div>
        <BotArmy 
        bots={this.state.army}
        handleRemove={this.handleRemove} />
        
        {this.state.selectedBot === null ?
          <BotCollection 
          handleClick={this.handleShow} 
          handleFilter={this.handleFilter}
          filterType={this.state.filterType}
          bots={this.botsToShow()} />
        :
          <BotSpecs 
          bot={this.state.selectedBot}
          handleAdd={this.handleAdd}
          handleHide={this.handleHide}/>
        }
      </div>
    );
  }

}

export default BotsPage;
