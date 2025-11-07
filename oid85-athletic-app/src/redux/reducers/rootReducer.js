import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { exerciseTemplateReducer } from './exerciseTemplateReducer'

export const rootReducer = combineReducers({
    app: appReducer,
	exerciseTemplate: exerciseTemplateReducer
})