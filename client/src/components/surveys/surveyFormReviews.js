import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formfields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    })
    return (
        <div>
            <h5>Confirm your entry!</h5>
            <div>
                {reviewFields}
            </div>
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                Back
            </button>
            <button className="green right btn-flat white-text" onClick={() => submitSurvey(formValues, history)}>
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values || {}
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));