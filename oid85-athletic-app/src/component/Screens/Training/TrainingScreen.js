import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../../Alert/Alert'
import {Exercises} from "./Exercises"
import {SelectedTraining} from "./SelectedTraining"
import {Trainings} from "./Trainings"
import {TrainingPlan} from "./TrainingPlan"

export const TrainingScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div style={{ flex: 2, display: 'flex', flexDirection: "row" }}>
                    <Exercises />
                    <SelectedTraining />
                    <Trainings />
                </div>
                <div>
                    <TrainingPlan />
                </div>
            </div>            
        </React.Fragment>
    )    
}
