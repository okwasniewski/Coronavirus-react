import React from 'react';
import { css } from "@emotion/core";
import BeatLoader from "react-spinners/BeatLoader";
import InfoField from '../components/InfoField';
import { Link } from 'react-router-dom';

const override = css`
  display: block;
  margin: 0 auto;
  position:absolute;
  top:60%;
  left:50%;
  transform:translateX(-50%);
  border-color: red;
`;


class CountryDetail extends React.Component {

    state = {
        isLoaded: false,
        confirmed: '',
        recovered: '',
        deaths: '',
        cantLoad: false
    }


    fetchCountry = async () => {
        const fetchCountry = await fetch(`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`);
        try {

            const country = await fetchCountry.json();
            console.log(country)
            const { confirmed, recovered, deaths } = country;
            this.setState({
                isLoaded: true,
                confirmed: confirmed.value,
                recovered: recovered.value,
                deaths: deaths.value
            })
        }
        catch (e) {

            this.setState({
                cantLoad: true
            })
        }
    }


    componentDidMount() {
        this.fetchCountry();
    }


    render() {
        const content = (this.state.isLoaded) ? <>
            <img className={"countryDetail__photo"} src={`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}/og`} alt="photo1" />
            <h1 className={"countryDetail__title"}> {this.props.match.params.id} </h1>

            <InfoField text="Deaths" number={this.state.deaths} />
            <InfoField text="Recovered" number={this.state.recovered} />
            <InfoField text="Confirmed" number={this.state.confirmed} />


        </> : <BeatLoader
                size={15}
                color={"#123abc"}
                css={override}
            />

        return (
            <div className={"countryDetail"}>
                {!this.state.cantLoad && content}
                {this.state.cantLoad && <>
                    <p>{this.props.match.params.id} doesn't have any confirmed cases</p>
                    <Link to="/Coronavirus-react/countries"> Back to searching </Link>
                </>}
            </div>
        )
    }
}

export default CountryDetail;