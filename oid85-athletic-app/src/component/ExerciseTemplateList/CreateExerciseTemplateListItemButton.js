import React from 'react'
import {useDispatch} from 'react-redux'
import {showCreateExerciseTemplateModal} from '../../redux/actions/exerciseTemplateActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateExerciseTemplateListItemButton = () => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary create-exercise-template-list-item-button'
                onClick={() => 
                dispatch(showCreateExerciseTemplateModal())
                }>Новое упражнение</button>
        </React.Fragment>
    )
}