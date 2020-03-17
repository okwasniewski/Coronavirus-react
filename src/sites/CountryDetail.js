import React from 'react';



class CountryDetail extends React.Component {
fetchCountry = async(props) => {
      const fetchCountry = await fetch(`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}`);
      const country = await fetchCountry.json();
      const { confirmed, recovered, deaths } = country;
      this.setState({
        isLoaded: true,
        confirmed: confirmed.value,
        recovered: recovered.value,
        deaths: deaths.value
      })
  }
state = {
    isLoaded: false,
    confirmed: '',
    recovered:'',
    deaths: ''

}


render() {
    this.fetchCountry();
        if(this.state.isLoaded){
            return (
                <div className={"countryDetail"}>
                    <img className={"countryDetail__photo"} src={`https://covid19.mathdro.id/api/countries/${this.props.match.params.id}/og`}></img>
                   <h1 className={"countryDetail__title"}> {this.props.match.params.id} </h1> 
                   <p className={"countryDetail__confirmed"}>Confirmed: {this.state.confirmed}</p>
                   <p className={"countryDetail__recovered"}>Recovered: {this.state.recovered}</p>
                   <p className={"countryDetail__deaths"}>Deaths: {this.state.deaths}</p>
                </div>
            );
        } else{ 
            return (<h1>Loading...</h1>)
        }
    }    
}

export default CountryDetail;