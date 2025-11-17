import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    fetchTrainingDetail,
    sagaTrainingDetailStartCardioMinutes,
    hideEditTrainingDetailStartCardioMinutesModal
} from '../../redux/actions/trainingDetailActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditTrainingDetailStartCardioMinutesModal = () => {
    
    const dispatch = useDispatch()
    const trainingDetail = useSelector(state => state.trainingDetail.trainingDetail)
    const editTrainingDetailStartCardioMinutesModalIsOpened = useSelector(state => state.trainingDetail.editTrainingDetailStartCardioMinutesModalIsOpened)

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
                    isOpen={editTrainingDetailStartCardioMinutesModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование разминки</h6>
                    <form>
                        <label>Кол-во минут разминки</label>
                        <input 
                            className='form-control edit-training-detail-start-cardio-minutes-modal-input'                             
                            type="number" 
                            defaultValue={trainingDetail.startCardioMinutes} 
                            placeholder='Кол-во минут разминки' 
                            onChange={ (event) => { 
                                dispatch(fetchTrainingDetail({...trainingDetail, startCardioMinutes: event.target.value})) 
                                }} />                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-start-cardio-minutes-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaTrainingDetailStartCardioMinutes())
                                    dispatch(hideEditTrainingDetailStartCardioMinutesModal())
                                    }}>Сохранить</button>                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-start-cardio-minutes-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditTrainingDetailStartCardioMinutesModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}