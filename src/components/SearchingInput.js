import React from 'react';

function SearchingInput(props) {
    return (
        <input onChange={props.change} type="text" />
    );
}

export default SearchingInput;