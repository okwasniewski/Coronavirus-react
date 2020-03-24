import React from "react";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import InfoField from "../components/InfoField";
import { Link } from "react-router-dom";

const override = css`
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  border-color: red;
`;

class CountryDetail extends React.Component {
  state = {
    isLoaded: false,
    confirmed: "",
    recovered: "",
    deaths: "",
    lastUpdate: "",
    cantLoad: false,
    randomNumber: "123123123"
  };

  fetchCountry = async () => {
    const fetchCountry = await fetch(
      `https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`
    );
    try {
      const country = await fetchCountry.json();
      const { confirmed, recovered, deaths, lastUpdate } = country;
      this.setState({
        isLoaded: true,
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value,
        lastUpdate: lastUpdate
      });
    } catch (e) {
      this.setState({
        cantLoad: true
      });
    }
  };

  componentDidMount() {
    this.fetchCountry();
    this.getRandomNumber();
  }

  getRandomNumber() {
    let random = Math.floor(Math.random() * 1000);

    this.setState({
      randomNumber: this.state.randomNumber + random
    });
  }

  render() {
    const content = this.state.isLoaded ? (
      <>
        <img
          className={"countryDetail__photo"}
          src={`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}/og?dummy${this.state.randomNumber}`}
          alt="photo1"
        />
        <h1 className={"countryDetail__title"}>
          {" "}
          {this.props.match.params.id}{" "}
        </h1>

        <InfoField text="Deaths" number={this.state.deaths} />
        <InfoField text="Recovered" number={this.state.recovered} />
        <InfoField text="Confirmed" number={this.state.confirmed} />
        <h4>
          Last update: {this.state.lastUpdate.slice(0, 10)}{" "}
          {this.state.lastUpdate.slice(11, 19)}
        </h4>
      </>
    ) : (
      <BeatLoader size={15} color={"#123abc"} css={override} />
    );

    return (
      <div className={"countryDetail"}>
        {!this.state.cantLoad && content}
        {this.state.cantLoad && (
          <>
            <p>{this.props.match.params.id} doesn't have any confirmed cases</p>
            <Link to="/Coronavirus-react/countries"> Back to searching </Link>
          </>
        )}
      </div>
    );
  }
}

export default CountryDetail;
