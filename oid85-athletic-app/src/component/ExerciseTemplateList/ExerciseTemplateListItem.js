import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchCurrentExerciseTemplate, showEditExerciseTemplateModal} from '../../redux/actions/exerciseTemplateActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const ExerciseTemplateListItem = ({key, exerciseTemplate}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='exercise-template-list-item'>
                <div 
                    className='exercise-template-list-item-name' 
                    key={key}
                    onClick={() => {
                        dispatch(fetchCurrentExerciseTemplate({...exerciseTemplate}))
                        }}>{exerciseTemplate.name}</div>
                <button 
                    className='btn btn-outline-link exercise-template-list-item-button'
                    onClick={() => {
                        dispatch(fetchCurrentExerciseTemplate({...exerciseTemplate}))
                        dispatch(showEditExerciseTemplateModal())
                        }}>...</button>
            </div>
        </React.Fragment>
    )
}