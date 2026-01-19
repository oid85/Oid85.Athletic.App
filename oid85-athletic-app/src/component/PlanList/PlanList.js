import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import {sagaGetPlanList} from '../../redux/actions/planActions'
import {PlanListItem} from './PlanListItem'
import './styles.css'

export const PlanList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const planList = useSelector(state => state.plan.planList)

    useEffect(() => {
        dispatch(sagaGetPlanList())
    }, [dispatch])

    return (
        <React.Fragment>
        {
            !planList.result || loading
            ? <Loader/>
            : 
            <div className='plan-list'>
                {
                    planList.result.planTrainings.map((planTraining, index) => (
                        <PlanListItem key = {index} planTraining = {planTraining} />
                    ))
                }                   
            </div>          
        }
        </React.Fragment>                
    )
}