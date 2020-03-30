import React from "react";
import RankingField from "../components/RankingField";
import RankingSelect from "../components/RankingSelect";
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
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

class Ranking extends React.Component {
  state = {
    topCountries: null,
    sortBy: "confirmed",
    isLoaded: false
  };

  fetchData = sorted => {
    fetch(`https://covid19.mathdro.id/api/${sorted}`)
      .then(res => res.json())
      .then(data => {
        this.topArray = [];
        for (let i = 0; this.topArray.length < 10; i++) {
          if (this.topArray.includes(data[i].countryRegion)) continue;
          this.topArray.push(data[i].countryRegion);
        }

        return data;
      })
      .then(data => {
        this.arrToState = [];
        console.log(this.topArray);
        this.topArray.forEach(el => {
          const country = data.filter(e => el === e.countryRegion);
          let casesSum = 0,
            deathsSum = 0,
            recoveredSum = 0;

          country.forEach(el => {
            casesSum += el.confirmed;
            deathsSum += el.deaths;
            recoveredSum += el.recovered;
          });

          const item = {
            countryRegion: el,
            confirmed: casesSum,
            deaths: deathsSum,
            recovered: recoveredSum
          };
          this.arrToState.push(item);
        });

        this.arrToState.sort((a, b) =>
          a[sorted] < b[sorted] ? 1 : b[sorted] < a[sorted] ? -1 : 0
        );
        this.setState({
          topCountries: this.arrToState,
          isLoaded: true
        });
      });
  };

  handleSelect = e => {
    this.setState({
      isLoaded: false,
      sortBy: e.target.value
    });
  };

  componentDidMount() {
    this.fetchData(this.state.sortBy);
  }

  componentDidUpdate() {
    if (!this.state.isLoaded) this.fetchData(this.state.sortBy);
  }

  render() {
    const data = this.state.isLoaded ? (
      this.state.topCountries.map(el => (
        <Link to={`/countries/${el.countryRegion}`} key={el.countryRegion}>
          {" "}
          <RankingField
            class={this.state.sortBy}
            name={el.countryRegion}
            cases={el.confirmed}
            deaths={el.deaths}
            recovered={el.recovered}
          />{" "}
        </Link>
      ))
    ) : (
      <BeatLoader size={15} color={"#123abc"} css={override} />
    );

    return (
      <section className="ranking">
        <h3>Top countries</h3>
        <RankingSelect change={this.handleSelect} />
        <RankingField
          class={this.state.sortBy}
          name="country"
          cases="cases"
          deaths="deaths"
          recovered="recovered"
        />
        {data}
      </section>
    );
  }
}

export default Ranking;
