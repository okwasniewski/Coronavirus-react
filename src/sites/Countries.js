import React from 'react';
import { Link } from 'react-router-dom';


class Countries extends React.Component {

    state = {
        isLoaded: false,
        data: {},
        recovered: '',
        cases: '',
    }
    
fetchingdata() {
    fetch('https://covid19.mathdro.id/api/confirmed')
    .then(res => res.json())
    .then(data => {
        const { confirmed, recovered, deaths } = data;
        this.setState({
            isLoaded: true,
            data: data,
            recovered: recovered,
            cases: confirmed
        })
    })
}

    
    render() {
        this.fetchingdata()
        if(this.state.isLoaded){
            return (
                <div>
                   {
                   this.state.data.map(item => {
                       return(<div className="">
                       <Link to={`/countries/${item.countryRegion}`}><h1>{item.countryRegion}</h1> </Link>
                       <p>Confirmed: {item.confirmed}</p> 
                       <p>Deaths: {item.deaths}</p> 
                       <p>Recovered: {item.recovered}</p> 
                       </div>);
                   })}
                </div>
            );
        } else{ 
            return (<h1>Loading...</h1>)
        }
    }
}

export default Countries;