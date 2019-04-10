import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  showArmy = () => {
    return this.props.botCollection.map((bot) => (bot.enacted ? <BotCard key={bot.id} bot={bot} removeBot={this.props.removeBot} /> :null))
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.showArmy}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
