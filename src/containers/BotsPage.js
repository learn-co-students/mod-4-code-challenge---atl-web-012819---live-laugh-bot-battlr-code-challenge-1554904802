import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {
  //start here with your code for step one

	state = {
		bots: []
	}

	componentDidMount() {
		fetch(API)
		.then(res => res.json())
		.then(data => {
			const updatedBotsData = data.map((bot) => ({...bot, isEnlisted: false}))
			this.setState({ bots: updatedBotsData })
		})
	}

	enlistBot = (bot) => {
		const enlistedBots = this.state.bots.map((b) => (bot.id === b.id ? ({...b, isEnlisted: !b.isEnlisted}) : b))
		this.setState({ bots: enlistedBots })
	}

  render() {
    return (
      <div>
				<YourBotArmy bots={this.state.bots} enlistBot={this.enlistBot}/>
				<BotCollection bots={this.state.bots} enlistBot={this.enlistBot}/>
      </div>
    );
  }

}

export default BotsPage;
