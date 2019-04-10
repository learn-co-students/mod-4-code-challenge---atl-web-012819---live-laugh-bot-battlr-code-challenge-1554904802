import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		const {bots} = this.props
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots.map((bot)=> <BotCard bot={bot} handleClick={this.props.handleClick} /> )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
