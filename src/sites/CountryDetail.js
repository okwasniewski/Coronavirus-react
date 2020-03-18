import React from "react";

class CountryDetail extends React.Component {
  componentDidMount() {
    this.fetchCountry();
  }
  fetchCountry = async props => {
    const fetchCountry = await fetch(
      `https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`
    );
    try {
      const country = await fetchCountry.json();
      const { confirmed, recovered, deaths } = country;
      this.setState({
        isLoaded: true,
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value
      });
    } catch (e) {
      this.setState({
        cantload: true
      });
    }
  };
  state = {
    cantload: false,
    isLoaded: false,
    confirmed: "",
    recovered: "",
    deaths: ""
  };

  render() {
    if (this.state.isLoaded) {
      return (
        <div className={"countryDetail"}>
          <img
            className={"countryDetail__photo"}
            src={`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}/og`}
          ></img>
          <h1 className={"countryDetail__title"}>
            {" "}
            {this.props.match.params.id}{" "}
          </h1>
          <p className={"countryDetail__confirmed"}>
            Confirmed: {this.state.confirmed}
          </p>
          <p className={"countryDetail__recovered"}>
            Recovered: {this.state.recovered}
          </p>
          <p className={"countryDetail__deaths"}>Deaths: {this.state.deaths}</p>
        </div>
      );
    } else if (this.state.cantload) {
      return <h1>There is no data for this country</h1>;
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default CountryDetail;
