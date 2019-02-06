import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    render () {
        return (
            <h1>Wecome to my boilder plate {this.props.website}</h1>
        );
    }
}

App.propTypes = {
    website: PropTypes.string
};

export default App;
