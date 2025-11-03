import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../../Loader/Loader'
import {sagaExerciseList} from '../../../redux/actions/trainingActions'
import '../../Report/Report.css'
import { Table } from '../../Report/Table'

export const Exercises = () => {

    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const exerciseList = useSelector(state => state.training.exerciseList)

    useEffect(() => {
        dispatch(sagaExerciseList())
    }, [])

    return (
        <React.Fragment>
            <div>1</div>
        </React.Fragment>
    )
}