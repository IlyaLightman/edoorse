import { combineReducers } from 'redux'
import courseReducer from '../reducers/course'

export default combineReducers({
	course: courseReducer
})