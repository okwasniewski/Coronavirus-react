import React from 'react';
import Stats from '../layouts/Stats';
import Graph from '../components/Graph';
import Ranking from '../layouts/Ranking'



function Main(props) {
    return (
        <main className="main">
            <Stats />
            <Graph />
            <Ranking />
        </main>
    );
}

export default Main;