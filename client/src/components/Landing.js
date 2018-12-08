import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Emaily!</h1>
                Collect Feedback from your users.
            </div>
        );
    }
}

function mapSateToProps({ auth }) {
    return { auth };
}

export default connect(mapSateToProps)(Header);