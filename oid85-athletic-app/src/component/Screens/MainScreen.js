import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import {ExerciseTemplateList} from "../ExerciseTemplateList/ExerciseTemplateList"
import {TrainingDetail} from "../TrainingDetail/TrainingDetail"
import {TrainingList} from "../TrainingList/TrainingList"
import {PlanList} from "../PlanList/PlanList"
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
                    <PlanList />
                </div>
            </div>            
        </React.Fragment>
    )    
}
