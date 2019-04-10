import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botCollection: [],
    selectedBot: null,
    botInfo: false
  }

    componentDidMount() {
      fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => {
        const botData = data.map(bot => ({...bot, enlisted: false}))
        this.setState({ botCollection : botData })
      })
    }

    enactBot = (bot) => {
      const enactedBots = this.state.bots.map((bot) => bot.id === bot.id ? ({...bot, enacted: !bot.enacted}) : bot )
      this.setState({ nots: enactedBots, selectedBot: null, showBotInfo: false })
    } 

    handleBotSpecsState = (bot) => {
      this.setState({ selectedBot: bot, showBotInfo: !this.state.showBotInfo }, () => this.showSpecsOrCollection())
    }

    showSpecsOrCollection = () => {
      const bot = this.state.selectedBot
      if (this.state.showBotInfo) {
          return <BotSpecs key={bot.id} bot={bot} enlistBot={this.enactBot} handleBackToCollection={this.handleBackToCollection} />
      } else if (!this.state.showBotInfo) {
          return <BotCollection bots={this.state.bots} handleBotInfoState={this.handleBotInfoState} />
      }
    }

    handleBotInfoState = (bot) => {
      this.setState({ selectedBot: bot, showBotInfo: !this.state.showBotInfo }, () => this.showSpecsOrCollection())
    }

    handleBackToCollection = () => {
      this.setState({ showBotInfo: false})
    }

  render() {
    return (
      <div>
        <YourBotArmy botCollection={this.state.botCollection} />
        {this.showSpecsOrCollection()}
      </div>
    );
  }
}

export default BotsPage;
