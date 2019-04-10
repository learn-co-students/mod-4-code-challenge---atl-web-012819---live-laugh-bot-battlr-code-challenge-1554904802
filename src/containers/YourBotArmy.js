import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  currentArmy = () => {
    return this.props.bots.map((bot) => (bot.enlisted ? <BotCard bot={bot} handleClick={this.props.enlistBot} /> : null ))
}

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.currentArmy()}
            
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
