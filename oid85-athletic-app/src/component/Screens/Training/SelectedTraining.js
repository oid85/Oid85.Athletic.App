import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaExerciseList} from '../../../redux/actions/trainingActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const SelectedTraining = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const exerciseList = useSelector(state => state.training.exerciseList)

    useEffect(() => {
        dispatch(sagaExerciseList())
    }, [])

    return (
        <React.Fragment>
            <div style={{ border: '1px solid black' }}>2</div>
        </React.Fragment>
    )
}