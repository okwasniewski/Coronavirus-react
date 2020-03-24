import React from "react";
import InfoField from "../components/InfoField.js";

class Stats extends React.Component {
  state = {
    isLoaded: false,
    deaths: 0,
    recovered: 0,
    cases: 0,
    lastUpdate: ""
  };

  componentDidMount() {
    fetch("https://covid19.mathdro.id/api")
      .then(res => res.json())
      .then(data => {
        const { confirmed, recovered, deaths, lastUpdate } = data;
        this.setState({
          isLoaded: true,
          deaths: deaths.value,
          recovered: recovered.value,
          cases: confirmed.value,
          lastUpdate: lastUpdate
        });
      });
    localStorage.getItem(this.state.cases);
  }
  render() {
    return (
      <div>
        <section className="stats">
          {this.state.isLoaded && (
            <>
              <InfoField text="Total deaths" number={this.state.deaths} />
              <InfoField text="Total recovered" number={this.state.recovered} />
              <InfoField text="Total cases" number={this.state.cases} />
            </>
          )}
        </section>
        <h4 style={{ textAlign: "center" }}>
          Last update: {this.state.lastUpdate.slice(0, 10)}{" "}
          {this.state.lastUpdate.slice(11, 19)}
        </h4>
      </div>
    );
  }
}

export default Stats;
