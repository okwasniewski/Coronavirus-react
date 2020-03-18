import React from 'react';
import CountUp from 'react-countup';

function InfoField(props) {



    return (
        <div className='info-field'>
            <h1> {props.text} </h1>
            <h2><CountUp
                start={props.number / 1.5}
                end={props.number}
                duration={2.5}
                useEasing={true}
                useGrouping={true}

            /></h2>
        </div>
    );
}

export default InfoField;