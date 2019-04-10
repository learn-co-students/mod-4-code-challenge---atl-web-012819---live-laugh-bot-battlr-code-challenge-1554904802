import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

	renderBots = () => {
			return this.props.bots.map((bot) => {
				return <BotCard key={bot.id} enlistBot={this.props.enlistBot} bot={bot}/>
			})
		}

  render(){
		// console.log("In Bot Collection", this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
