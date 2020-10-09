import {combineReducers} from 'redux'
import reducerFunction from './reducer';

const allReducer=combineReducers({
    getID:reducerFunction
});
    // getiID:reducer



export default allReducer;