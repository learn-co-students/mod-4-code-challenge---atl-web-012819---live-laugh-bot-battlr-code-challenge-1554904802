import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


    renderBot = () => {
        return this.props.bots.map((bot) => <BotCard key={bot.id} bot={bot} handleBotSpecsState={this.props.handleBotSpecsState} /> )
    }
    // renderBot = () => {
    //     return this.props.bots.map((bot) => {
    //         return <BotCard key={bot.id} bot={bot} handleBotSpecsState={this.props.handleBotSpecsState} />
    //     })
    // }

    render(){
        return (
            <div className="ui four column grid">
                <div className="row">
                    {this.renderBot()}
                </div>
            </div>
        );
    }

};

export default BotCollection;
