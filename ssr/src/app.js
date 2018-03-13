import React from 'react';
import PropTypes from 'prop-types';

const App = ({gists}) => {
    {gists}
    return (<ul>
    {gists.map((gist) => (
        <li key={gist.id}>{gist.description}</li>
    ))}
    </ul>);
}

App.propTypes = {
    gists: PropTypes.array
}

export default App;