import React from 'react'
import './styles.css'
import { TrainingDetailExerciseListItem } from './TrainingDetailExerciseListItem'

export const TrainingDetailExerciseList = ({exercises}) => {
    return (
        <React.Fragment>
            {
                !exercises
                ? <div></div>
                :
                <div>
                    {
                        exercises.map((exercise, index) => (
                            <TrainingDetailExerciseListItem 
                            key = {index} 
                            exercise = {exercise} />
                        ))                        
                    }
                </div>
            }
        </React.Fragment>  
    )
}