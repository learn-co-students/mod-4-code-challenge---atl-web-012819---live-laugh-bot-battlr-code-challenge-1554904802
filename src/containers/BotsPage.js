import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotCollection";

const BOTAPI = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
    
    state = {
        bots: [],
        selectedBot: null,
        showBotSpecs: false
    }

    componentDidMount() {
        fetch(BOTAPI)
            .then(res => res.json())
            .then(data => {
                const botsAddedData = data.map(bot => ({ ...bot, enlisted: false }))
                this.setState({ bots: botsAddedData })
            })
    }

    enlistBot = (bot) => {
        const enlistedBots = this.state.bots.map((b) => (bot.id === b.id ? ({ ...b, enlisted: !b.enlisted }) : b))
        this.setState({ bots: enlistedBots, selectedBot: null, showBotSpecs: false })
    }

    handleBotSpecsState = (bot) => {
        this.setState({ selectedBot: bot, showBotSpecs: !this.state.showBotSpecs })
    }

    handleBackToCollection = () => {
        this.setState({ showBotSpecs: false })
    }

    showSpecsOrCollection = () => {
        let bot = this.state.selectedBot
        if (this.state.showBotSpecs === true) {
            return <BotSpecs bot={this.state.selectedBot} enlistBot={this.enlistBot} handleBackToCollection={this.handleBackToCollection} />
        } else if (this.state.showBotSpecs === false) {
            return <BotCollection bots={this.state.bots} handleBotSpecsState={this.handleBotSpecsState} />
        }
    }

    render() {
        return (
            <div>
                <YourBotArmy bots={this.state.bots} removeBot={this.removeBot} />
                {this.showSpecsOrCollection()}
            </div>
        );
    }

}

export default BotsPage;
