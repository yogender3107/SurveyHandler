import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';

class DashBoard extends Component {
    render() {
        return (
            <div>
                <SurveyList />
                <div className='fixed-action-btn'>
                    <Link to='/surveys/new' className='btn-floating btn-large red'>
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapSateToProps({ auth }) {
    return { auth };
}

export default connect(mapSateToProps)(DashBoard);