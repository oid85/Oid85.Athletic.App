import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentTraining} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemTraining = ({training}) => {

    const dispatch = useDispatch()

    let className = 'plan-list-item-training'

    if (!training.name) { className = className + ' plan-list-item-training-lightgreen' }    
    if (training.totalWeight >= 0 && training.totalWeight < 1000) { className = className + ' plan-list-item-training-low' }
    if (training.totalWeight >= 1000 && training.totalWeight < 2000) { className = className + ' plan-list-item-training-middle' }
    if (training.totalWeight >= 2000) { className = className + ' plan-list-item-training-high' }

    return (
        <React.Fragment>
            <div 
                className={className}
                onClick={() => {
                    dispatch(fetchCurrentTraining({...training}))
                    }}>
                {
                    !training.name ? <div></div> :
                    <div>
                        <div className='plan-list-item-training-name'>{training.name}</div>
                        <div>{training.totalCountIterations} повт.</div>
                        <div>{training.totalWeight} кг</div>                        
                    </div>
                }
            </div>
        </React.Fragment>
    )
}