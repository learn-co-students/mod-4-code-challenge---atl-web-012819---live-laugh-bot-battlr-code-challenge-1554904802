import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

	renderEnlistedArmy = () => {
		return this.props.bots.map((bot) => (bot.isEnlisted ? <BotCard key={bot.id} enlistBot={this.props.enlistBot} bot={bot} /> : null ))
	}

  render(){
		// console.log("In YourBotArmy", this.props.bots)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderEnlistedArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
