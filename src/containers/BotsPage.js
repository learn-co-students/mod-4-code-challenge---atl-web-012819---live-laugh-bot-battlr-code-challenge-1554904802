import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";



class BotsPage extends React.Component {

    state = {
        bots: []
    }

    componentDidMount() {
        fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
        .then(res => res.json())
        .then(data => {
            const botsAddEnlist = data.map(bot => ({ ...bot, enlisted: false}))
            this.setState({ bots: botsAddEnlist })
        })
    }

    enlistBot = (bot) => {
        const enlistedBots = this.state.bots.map((botElement) => (bot.id === botElement.id ? ({...botElement, enlisted: !botElement.enlisted}) : botElement ))
        this.setState({ bots: enlistedBots})
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
                
                <BotCollection bots={botsArray} enlistBot={this.enlistBot}/>
            </div>
        );
    }
}

export default BotsPage;
