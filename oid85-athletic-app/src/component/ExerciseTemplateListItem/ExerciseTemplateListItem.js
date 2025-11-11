import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentExerciseTemplate, showEditExerciseTemplateModal} from '../../redux/actions/exerciseTemplateActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const ExerciseTemplateListItem = ({key, exerciseTemplate}) => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <div className='exercise-template-list-item-container'>
                <div 
                    className='exercise-template-list-item' 
                    key={key}
                    onClick={() => {dispatch(fetchCurrentExerciseTemplate({...exerciseTemplate}))}}>{exerciseTemplate.name}</div>
                <button 
                    className='btn btn-outline-primary edit-exercise-template-list-item-button'
                    onClick={() => {
                        dispatch(fetchCurrentExerciseTemplate({...exerciseTemplate}))
                        dispatch(showEditExerciseTemplateModal())}}>...</button>
            </div>
        </React.Fragment>
    )
}