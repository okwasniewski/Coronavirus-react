import React from 'react';
import InfoField from '../components/InfoField.js';
class Stats extends React.Component {

    state = {
        isLoaded: false,
        deaths: 0,
        recovered: 0,
        cases: 0
    }

    componentDidMount() {
        fetch('https://covid19.mathdro.id/api?fbclid=IwAR3E3gJC61NCUfk5OiBCsSaNbdk9vX9T7ilo7GewQZbUpvTSov0l0EUzm1M')
            .then(res => res.json())
            .then(data => {
                const { confirmed, recovered, deaths } = data;
                this.setState({
                    isLoaded: true,
                    deaths: deaths.value,
                    recovered: recovered.value,
                    cases: confirmed.value
                })
            })
    }
    render() {
        return (
            <section className="stats">
                {this.state.isLoaded && <>
                    <InfoField text="Total deaths" number={this.state.deaths} />
                    <InfoField text="Total recovered" number={this.state.recovered} />
                    <InfoField text="Total cases" number={this.state.cases} />
                </>}
            </section>
        );
    }
}

export default Stats;