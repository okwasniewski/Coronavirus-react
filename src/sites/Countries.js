import React from "react";
import SearchingInput from "../components/SearchingInput";
import { Link } from "react-router-dom";

class Countries extends React.Component {
  state = {
    text: "",
    countries: [],
    isLoaded: false
  };

  changeHandle = e => {
    this.setState({
      text: e.target.value.toLowerCase()
    });

    if (e.target.value !== "") {
      this.fetchData();
    } else {
      this.setState({
        countries: [],
        isLoaded: false
      });
    }
  };

  fetchData = () => {
    fetch("https://covid19.mathdro.id/api/countries")
      .then(res => res.json())
      .then(data => {
        let dataObj = data.countries;

        let filtered = dataObj.filter(el =>
          el.name.toLowerCase().includes(this.state.text)
        );

        this.setState({
          countries: filtered,
          isLoaded: true
        });
      });
  };

  render() {
    const searchResult =
      !this.state.isLoaded || this.state.countries.length > 0 ? (
        this.state.countries.map(el => (
          <Link key={el.name} to={`/countries/${el.name}`}>
            <h3 className={"countries__result"}>{el.name}</h3>{" "}
          </Link>
        ))
      ) : (
        <p>Country doesn't exist</p>
      );
    return (
      <div className="countries">
        <h2>Search country:</h2>
        <SearchingInput change={this.changeHandle} />
        <div className="countries__resultsList">{searchResult}</div>
      </div>
    );
  }
}

export default Countries;
