import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const ExerciseTemplateListItem = ({key, exerciseTemplate}) => {
    
    return (
        <React.Fragment>
            <div className='exercise-template-list-item-container'>
                <div className='exercise-template-list-item' key={key}>{exerciseTemplate.name}</div>
            </div>
        </React.Fragment>
    )
}