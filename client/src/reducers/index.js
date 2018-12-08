import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import SurveyReducer from './surveysReducer'

export default combineReducers({
    auth: AuthReducer,
    surveys: SurveyReducer
});