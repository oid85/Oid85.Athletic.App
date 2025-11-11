import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {showCreateTrainingModal} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateTrainingListItemButton = () => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary create-training-list-item-button'
                onClick={() => 
                dispatch(showCreateTrainingModal())
                }>Новая тренировка</button>
        </React.Fragment>
    )
}