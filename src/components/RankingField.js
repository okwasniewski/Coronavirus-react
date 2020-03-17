import React from 'react';

function RankingField(props) {
    return (
        <div className={'ranking__field ' + props.class}>
            <div>{props.name}</div>
            <div>{props.cases}</div>
            <div>{props.deaths}</div>
            <div>{props.recovered}</div>

        </div>
    );
}

export default RankingField;