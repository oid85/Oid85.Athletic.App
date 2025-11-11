import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import {ExerciseTemplateList} from "../ExerciseTemplateList/ExerciseTemplateList"
import {TrainingDetail} from "../TrainingDetail/TrainingDetail"
import {TrainingList} from "../TrainingList/TrainingList"
import {Plan} from "../Plan/Plan"
import './styles.css'

export const MainScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div className='horizontal-container'>
                    <ExerciseTemplateList />
                    <TrainingDetail />
                    <TrainingList />
                </div>
                <div>
                    <Plan />
                </div>
            </div>            
        </React.Fragment>
    )    
}
