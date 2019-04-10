import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
    
    showEnlistedArmy = () => {
        return this.props.bots.map((bot) => (bot.enlisted ? <BotCard key={bot.id} bot={bot} removeBot={this.props.removeBot} /> : null))
    }

    render(){
        return (
            <div className="ui segment inverted olive bot-army">
                <div className="ui five column grid">
                    <div className="row bot-army-row">
                        {this.showEnlistedArmy()}
                    </div>
                </div>
            </div>
        );
    }
  
};

export default YourBotArmy;
