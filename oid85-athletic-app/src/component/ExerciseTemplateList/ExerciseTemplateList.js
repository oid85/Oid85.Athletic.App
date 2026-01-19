import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {sagaGetExerciseTemplateList} from '../../redux/actions/exerciseTemplateActions'
import Loader from '../Loader/Loader'
import {ExerciseTemplateListItem} from './ExerciseTemplateListItem'
import {CreateExerciseTemplateListItemButton} from './CreateExerciseTemplateListItemButton'
import {CreateExerciseTemplateModal} from './CreateExerciseTemplateModal'
import {EditExerciseTemplateModal} from './EditExerciseTemplateModal'
import './styles.css'

export const ExerciseTemplateList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const exerciseTemplateList = useSelector(state => state.exerciseTemplate.exerciseTemplateList)

    useEffect(() => {
        dispatch(sagaGetExerciseTemplateList())
    }, [])

    return (
        <React.Fragment>
        {
            !exerciseTemplateList.result || loading
            ? <Loader/>
            :
            <div className='exercise-template-list'>
                <CreateExerciseTemplateListItemButton />
                {
                    exerciseTemplateList.result.exerciseTemplates.map((exerciseTemplate, index) => (
                        <ExerciseTemplateListItem key = {index} exerciseTemplate = {exerciseTemplate} />
                    ))
                }
                <CreateExerciseTemplateModal />
                <EditExerciseTemplateModal /> 
            </div>          
        }
        </React.Fragment>                
    )
}