import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {showCreatePressureModal} from '../../redux/actions/pressureActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreatePressureButton = () => {
    
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary create-pressure-button'
                onClick={() => 
                dispatch(showCreatePressureModal())
                }>Новое измерение</button>
        </React.Fragment>
    )
}