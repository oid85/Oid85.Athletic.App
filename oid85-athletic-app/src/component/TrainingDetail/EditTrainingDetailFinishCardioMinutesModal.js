import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    fetchTrainingDetail,
    sagaTrainingDetailFinishCardioMinutes,
    hideEditTrainingDetailFinishCardioMinutesModal
} from '../../redux/actions/trainingDetailActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditTrainingDetailFinishCardioMinutesModal = () => {
    
    const dispatch = useDispatch()
    const trainingDetail = useSelector(state => state.trainingDetail.trainingDetail)
    const editTrainingDetailFinishCardioMinutesModalIsOpened = useSelector(state => state.trainingDetail.editTrainingDetailFinishCardioMinutesModalIsOpened)

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
                    isOpen={editTrainingDetailFinishCardioMinutesModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование разминки</h6>
                    <form>
                        <label>Кол-во минут разминки</label>
                        <input 
                            className='form-control edit-training-detail-finish-cardio-minutes-modal-input'                             
                            type="number" 
                            defaultValue={trainingDetail.finishCardioMinutes} 
                            placeholder='Кол-во минут разминки' 
                            onChange={ (event) => { 
                                dispatch(fetchTrainingDetail({...trainingDetail, finishCardioMinutes: event.target.value})) 
                                }} />                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-finish-cardio-minutes-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaTrainingDetailFinishCardioMinutes())
                                    dispatch(hideEditTrainingDetailFinishCardioMinutesModal())
                                    }}>Сохранить</button>                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-finish-cardio-minutes-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditTrainingDetailFinishCardioMinutesModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}