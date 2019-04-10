import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"

const API = `https://bot-battler-api.herokuapp.com/api/v1/bots`

class BotsPage extends React.Component {

  state = {
    bots: [],
    selectedBots: [],
    clickedBot: null
  }

  handleData = (data) => {
    this.setState({
      bots: data
    })
  }

  handleClick = (botId) => {
    this.setState({
      clickedBot: this.findBotById(botId)
    })
  }

  handleEnlistClick = (botId) => {
    if (!this.findSelectedBotById(botId)) {
      this.setState({
        selectedBots: this.state.selectedBots.concat(this.findBotById(botId)),
        clickedBot: null
      })
    }
  }

  handleGoBackClick = () => {
    this.setState({
      clickedBot: null
    })
  }

  findBotById = (botId) => {
    return this.state.bots.find(bot => bot.id === botId)
  }

  findSelectedBotById = (botId) => {
    return this.state.selectedBots.find(bot => bot.id === botId)
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.handleData(data))
  }

  render() {
    return (
      <div>
        <YourBotArmy selectedBots={this.state.selectedBots}
                     handleClick={this.handleClick} />
        <BotCollection bots={this.state.bots} 
                       handleClick={this.handleClick}
                       clickedBot={this.state.clickedBot}
                       handleEnlistClick={this.handleEnlistClick}
                       handleGoBackClick={this.handleGoBackClick}/>
      </div>
    );
  }

}

export default BotsPage;
