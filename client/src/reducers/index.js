import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import AuthReducer from './authReducer';
import SurveyReducer from './surveysReducer';

export default combineReducers({
    auth: AuthReducer,
    form: reduxForm,
    surveys: SurveyReducer,
});