import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemTraining = ({training}) => {

    let className = 'plan-list-item-training'

    if (!training.name) { className = className + ' plan-list-item-training-lightgreen' }    
    if (training.totalWeight >= 0 && training.totalWeight < 1000) { className = className + ' plan-list-item-training-low' }
    if (training.totalWeight >= 1000 && training.totalWeight < 2000) { className = className + ' plan-list-item-training-middle' }
    if (training.totalWeight >= 2000) { className = className + ' plan-list-item-training-high' }

    return (
        <React.Fragment>
            <div className={className}>
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