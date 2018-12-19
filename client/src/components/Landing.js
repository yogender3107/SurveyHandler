import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {

    componentDidUpdate() {
        if (this.props.auth)
            this.props.history.push('/surveys');
    }

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Emaily!</h1>
                Collect Feedback from your users.
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Landing);