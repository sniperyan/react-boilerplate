import {combineReducers} from 'redux';
import list from './list';
import common from './common';


const reducers = {
    list,
    common
};

export default combineReducers({
    ...reducers
});
