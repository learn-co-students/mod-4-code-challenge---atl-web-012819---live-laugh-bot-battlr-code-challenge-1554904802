import React from "react";
import BotCard from "../components/BotCard";
import FilterBar from '../components/FilterBar';

class BotCollection extends React.Component {
  //your code here

  render(){
		const {bots} = this.props
  	return (
  	  <div className="ui four column grid">
				<div className="row">
					<div className="column">
						<FilterBar 
						 handleFilter={this.props.handleFilter}
						 filterType={this.props.filterType}/>
					</div>
				</div>
    		<div className="row">
    		  {bots.map((bot)=>(
						 <BotCard 
						 key={bot.id}
						 bot={bot} 
						 handleClick={this.props.handleShow}/>) )}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
