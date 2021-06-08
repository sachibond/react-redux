import {combineReducers} from 'redux';
import {loginReducer} from './loginReducer';

const allreducer = combineReducers({
     loginReducer: loginReducer
});

export default allreducer;