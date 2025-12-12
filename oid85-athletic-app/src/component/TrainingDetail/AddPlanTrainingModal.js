import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import moment from 'moment'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { hideAddPlanTrainingModal } from '../../redux/actions/trainingDetailActions';
import { fetchCurrentPlan, sagaAddDayTrainingPlan, sagaAddMorningTrainingPlan } from '../../redux/actions/planActions';

export const AddPlanTrainingModal = () => {
    
    const dispatch = useDispatch()
    const addPlanTrainingModalIsOpened = useSelector(state => state.trainingDetail.addPlanTrainingModalIsOpened)
    const currentPlan = useSelector(state => state.plan.currentPlan)

    useEffect(() => {
        dispatch(fetchCurrentPlan({...currentPlan, date: moment().format('YYYY-MM-DD').toString()}))
    }, [])

    const customStyles = {
        content: {
          top: '50%',
          left: '50%', 
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',                          
          transform: 'translate(-50%, -50%)'
        }
      };

    return (
        <React.Fragment>
            <div>                
                <Modal
                    isOpen={addPlanTrainingModalIsOpened}
                    style={customStyles}>
                    <h6>Добавить тренировку в план</h6>
                    <form>
                        <label>Дата</label>
                        <input 
                            className='form-control add-plan-training-modal-date'                             
                            type="date" 
                            defaultValue={moment().format('YYYY-MM-DD').toString()}
                            onChange={ (event) => {                                 
                                dispatch(fetchCurrentPlan({...currentPlan, date: event.target.value})) 
                                }} />                               
                        <button 
                            className='btn btn-outline-primary add-plan-training-modal-modal-save-morning-button' 
                            onClick={ () => {
                                dispatch(sagaAddMorningTrainingPlan())
                                dispatch(hideAddPlanTrainingModal())
                                    }}>Утро</button>     
                        <button 
                            className='btn btn-outline-primary add-plan-training-modal-modal-save-day-button' 
                            onClick={ () => {
                                dispatch(sagaAddDayTrainingPlan())
                                dispatch(hideAddPlanTrainingModal())
                                    }}>День</button>                                                                
                        <button 
                            className='btn btn-outline-primary add-plan-training-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideAddPlanTrainingModal())
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}