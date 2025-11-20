import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemTraining = ({training}) => {

    let className = 'plan-list-item-training'

    if (!training.name) { className = className + ' plan-list-item-training-lightgreen' }    
    if (training.totalWeight >= 0 && training.totalWeight < 500) { className = className + ' plan-list-item-training-lightyellow' }
    if (training.totalWeight >= 500 && training.totalWeight < 2000) { className = className + ' plan-list-item-training-lightsalmon' }
    if (training.totalWeight >= 2000) { className = className + ' plan-list-item-training-tomato' }

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