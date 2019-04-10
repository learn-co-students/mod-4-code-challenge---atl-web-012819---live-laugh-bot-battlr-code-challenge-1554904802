import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {

    state = {
        bots: [],
        selected: []
    }

    componentDidMount() {
        fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
        .then(res => res.json())
        .then(data => {
            const botsAddData = data.map(bot => ({ ...bot, enlisted: false, selected: false}))
            this.setState({ bots: botsAddData })
        })
    }

    enlistBot = (bot) => {
        const enlistedBots = this.state.bots.map((botElement) => (bot.id === botElement.id ? ({...botElement, enlisted: !botElement.enlisted}) : botElement ))
        this.setState({ bots: enlistedBots})
    }

    //when bot clicked, send bot to BotSpecs, link enlist and collection to Specs
    //HOW TO ONLY SHOW DETAILS WHEN ONE IS SELECTED AHHHHHHH


    selectedBot = (bot) => {
      console.log("clicked", bot)
      let removed = this.state.bots.filter(b => b !== bot)
  
      this.setState({
        selected: [...this.state.selected, bot],
        bots: removed
      })

      //i know that setstate re renders page but not sure how to go about this, yikes
      // render() {
      //   return (
      //   <div>
      //  <BotSpecs bot={this.state.selected} enlistBot={this.enlistBot} />
      //  </div>
      //   )
      // }
    }
    
    

    render() {

        let enlistArray = []
        let botsArray = []

        this.state.bots.map((bot) => {
            if(bot.enlisted)
            enlistArray.push(bot)
            else 
            botsArray.push(bot)
        })
        return (
            <div>
                <YourBotArmy bots={enlistArray} enlistBot={this.enlistBot}/>
                <BotSpecs bot={this.state.selected} enlistBot={this.enlistBot} />
                <BotCollection bots={botsArray} selectedBot={this.selectedBot}/>
            </div>
        );
    }
}

export default BotsPage;
