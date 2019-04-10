import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: []
    };
  }

  enlist = bot => {
    const enlisted = true;
    const bots = this.state.bots.map(cur => {
      if (cur.id === bot.id) {
        return {...cur, enlisted}
      } else {
        return cur
      }
    })

    this.setState({ bots })
  }

  dismiss = bot => {
    const bots = this.state.bots.map(cur => {
      if (cur.id === bot.id) {
        delete cur.enlisted
        return cur
      } else {
        return cur
      }
    })

    this.setState({ bots })
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(bots => this.setState({ bots }));
  }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy bots={this.state.bots.filter(bot => bot.enlisted)} dismiss={this.dismiss} />
        <BotCollection bots={this.state.bots} enlist={this.enlist} />
      </div>
    );
  }
}

export default BotsPage;
