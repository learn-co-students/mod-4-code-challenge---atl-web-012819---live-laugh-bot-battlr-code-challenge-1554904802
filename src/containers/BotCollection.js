import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{this.props.clickedBot == null 
						? this.props.bots.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick}/>) 
						: <BotSpecs bot={this.props.clickedBot} 
												handleEnlistClick={this.props.handleEnlistClick}
												handleGoBackClick={this.props.handleGoBackClick} /> }
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
