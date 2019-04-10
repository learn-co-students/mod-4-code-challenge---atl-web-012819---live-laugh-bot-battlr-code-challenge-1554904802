import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	//your code here
	renderBot = () => {
		return this.state.props.map((bot) => {
			return <BotCard key={bot.id} bot={bot} handleBotInfoState={this.props.handleBotInfoState} />
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
