import React from 'react'
import ReactDOM from 'react-dom/client'
import {thunk} from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { rootReducer } from './redux/reducers/rootReducer'
import { sagaWatcherExerciseTemplate } from './redux/sagas/sagaWatcherExerciseTemplate'
import { sagaWatcherExercise } from './redux/sagas/sagaWatcherExercise'
import { sagaWatcherTraining } from './redux/sagas/sagaWatcherTraining'
import { sagaWatcherTrainingDetail } from './redux/sagas/sagaWatcherTrainingDetail'
import { sagaWatcherPlan } from './redux/sagas/sagaWatcherPlan'
import { sagaWatcherPressure } from './redux/sagas/sagaWatcherPressure'
import 'bootstrap/dist/css/bootstrap.min.css'

const saga = createSagaMiddleware()

const middlewareEnhancer = applyMiddleware(saga, thunk)
const composedEnhancers = compose(middlewareEnhancer)

const store = createStore(rootReducer, undefined, composedEnhancers)

saga.run(sagaWatcherExercise)
saga.run(sagaWatcherExerciseTemplate)
saga.run(sagaWatcherTraining)
saga.run(sagaWatcherTrainingDetail)
saga.run(sagaWatcherPlan)
saga.run(sagaWatcherPressure)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
