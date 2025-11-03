import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { trainingReducer } from './trainingReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	training: trainingReducer
})