import React from 'react';

function RankingSelect(props) {
    return (
        <div className="sort">
            <label htmlFor="sort">sort by </label>
            <select name="sort" id="sort" onChange={props.change}>
                <option value="confirmed">cases</option>
                <option value="deaths">deaths</option>
                <option value="recovered">recovered</option>
            </select>
        </div>
    );
}

export default RankingSelect;