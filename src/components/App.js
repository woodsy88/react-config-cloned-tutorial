import React from 'react';
import PropTypes from 'prop-types';
class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Wecome to my boilder plate {this.props.website}</h1>
                <h2>second test deploy</h2>
            </div>
        );
    }
}

App.propTypes = {
    website: PropTypes.string
};

export default App;
