import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import {ExerciseTemplateList} from "./ExerciseTemplateList"
import {Training} from "./Training"
import {TrainingList} from "./TrainingList"
import {Plan} from "./Plan"

export const MainScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <div style={{ flex: 1, display: 'flex', flexDirection: "row" }}>
                    <ExerciseTemplateList />
                    <Training />
                    <TrainingList />
                </div>
                <div>
                    <Plan />
                </div>
            </div>            
        </React.Fragment>
    )    
}
