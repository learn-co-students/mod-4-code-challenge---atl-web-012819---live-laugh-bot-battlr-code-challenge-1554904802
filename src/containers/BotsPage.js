import React, { Fragment } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Filter from "../components/Filter";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      bots: [],
      show: null,
      filter: "all"
    };
  }

  enlist = bot => {
    const enlisted = true;
    const bots = this.state.bots.map(cur => {
      if (cur.id === bot.id) {
        return { ...cur, enlisted };
      } else {
        return cur;
      }
    });

    this.setState({ bots });
  };

  dismiss = bot => {
    const bots = this.state.bots.map(cur => {
      if (cur.id === bot.id) {
        delete cur.enlisted;
        return cur;
      } else {
        return cur;
      }
    });

    this.setState({ bots });
  };

  show = bot => {
    // console.log("Show: ", bot);
    this.setState({
      show: bot
    });
  };

  handleChange = e => {
    // console.log(e.target.value)
    this.setState({
      filter: e.target.value
    });
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(bots => this.setState({ bots }));
  }

  render() {
    const filtered =
      this.state.filter === "all"
        ? this.state.bots
        : this.state.bots.filter(bot => bot.bot_class === this.state.filter);

    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          bots={this.state.bots.filter(bot => bot.enlisted)}
          dismiss={this.dismiss}
        />
        {this.state.show ? (
          <BotSpecs
            bot={this.state.show}
            back={() => this.setState({ show: null })}
            enlist={this.enlist}
          />
        ) : (
          <Fragment>
            <Filter handleChange={this.handleChange} selected={this.state.filter} />
            <BotCollection
              bots={filtered}
              // enlist={this.enlist}
              show={this.show}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default BotsPage;
