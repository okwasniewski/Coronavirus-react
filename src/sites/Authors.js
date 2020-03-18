import React from 'react';

function Authors(props) {
    return (
        <div className="authors">
            <div className="authors__box">
            <h1>Oskar Kwaśniewski</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lacinia nibh. Proin quis mauris ipsum. Vivamus consequat ac lorem quis eleifend. Praesent vel viverra felis, et placerat tellus. Aenean odio orci, dictum ac ullamcorper quis, consequat sit amet tellus. Aenean ac aliquet leo. Cras viverra egestas nibh, ac dictum ante.  </p>
            <i className="github" style={{ fontSize: 80 }} />                
            <a href="https://github.com/okwasniewski/">Github</a> 
            </div>
            <div className="authors__box">
            <h1>Konrad Ryczko</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lacinia nibh. Proin quis mauris ipsum. Vivamus consequat ac lorem quis eleifend. Praesent vel viverra felis, et placerat tellus. Aenean odio orci, dictum ac ullamcorper quis, consequat sit amet tellus. Aenean ac aliquet leo. Cras viverra egestas nibh, ac dictum ante.  </p>
            <a href="https://github.com/Ryczko">Github</a>  
            </div>
            <div className="authors__donate">
                <h1>Help us</h1>
                <p> Give us a star on github <a href={"https://github.com/okwasniewski/Coronavirus-react"}> Github </a> </p>
                
            </div>
        </div>
    );
}

export default Authors;