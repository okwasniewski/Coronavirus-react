import React from 'react';



class Countries extends React.Component {
    
fetchingdata() {
    fetch('https://covid19.mathdro.id/api/confirmed')
    .then(res => res.json())
    .then(data => {
        console.log(data[0].countryRegion)
        const { confirmed, recovered, deaths } = data;
        this.setState({
            isLoaded: true,
            data: data,
            recovered: recovered,
            cases: confirmed
        })
    })
}
    state = {
        isLoaded: false,
        data: {},
        recovered: '',
        cases: '',
    }
    render() {
        this.fetchingdata()
        if(this.state.isLoaded){
            return (
                <div>
                   {
                   this.state.data.map(item => {
                       return(<div className="">
                       <h1>{item.countryRegion}</h1> 
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