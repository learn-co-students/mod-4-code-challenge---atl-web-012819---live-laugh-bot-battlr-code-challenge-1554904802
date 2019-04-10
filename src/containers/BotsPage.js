import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotsCollection from "./BotCollection";

const BOTAPI = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
    
    state = {
        bots: []
    }

    componentDidMount () {
        this.renderBots()
    }

    fetchBots () {
       return fetch(BOTAPI).then(res => res.json())
    }

    renderBots() {
        this.fetchBots().then(botData => {
            const botsAddEnlistKey = botData.map(bot => ({ ...bot, enlisted: false }))
            this.setState({ bots: botsAddEnlistKey })
        })
    }

    addBot(bot) {
        let enlistedBots = this.state.bots.map((b) => (bot.id === b.id ? ({ ...b, enlisted: !b.enlisted }) : b))
        // this.setState({ bots: enlistedBots, selectedBot: null, showBotSpecs: false })
        this.setState({ bots: enlistedBots })
    }

    render() {
        return (
            <div>
                <YourBotArmy botArmy={this.state.bots}/>
                <BotsCollection bots={this.state.bots} addBot={this.addBot} />
            </div>
        );
    }

}

export default BotsPage;
