import {
	FETCH_COURSES_START,
	FETCH_COURSES_SUCCESS,
	FETCH_COURSES_ERROR
} from '../actions/actionTypes'

const initialState = {
	courses: [],
	loading: false,
	error: null
}

export default function courseReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_COURSES_START:
			return {
				...state, loading: true
			}
		case FETCH_COURSES_SUCCESS:
			return {
				...state, loading: false, courses: action.courses
			}
		case FETCH_COURSES_ERROR:
			return {
				...state, loading: false, error: action.error
			}
		default:
			return state
	}
}