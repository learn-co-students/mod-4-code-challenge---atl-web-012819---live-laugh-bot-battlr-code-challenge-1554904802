import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

    mapBots = () => {
        return this.props.bots.map((bot) => {
            return <BotCard key={bot.id} bot={bot} addBot={this.props.addBot}/>
        })
    }

    render(){
        return (
            <div className="ui four column grid">
                <div className="row">
                    {this.mapBots()}
                </div>
            </div>
        );
    }

};

export default BotCollection;
