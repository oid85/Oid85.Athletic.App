import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PlanListItemTraining = ({training}) => {
    return (
        <React.Fragment>
            <div className='plan-list-item-training'>
                {
                    !training.name ? <div></div> :
                    <div>
                        <div  className='plan-list-item-training-name'>{training.name}</div>
                        <div>{training.totalCountIterations} повт.</div>
                        <div>{training.totalWeight} кг</div>                        
                    </div>
                }
            </div>
        </React.Fragment>
    )
}