import { combineReducers } from 'redux';
import todoTaskReducer from './todoTaskReducer';

const allReducers = combineReducers({
    todoTasks:todoTaskReducer
});

export default allReducers;
