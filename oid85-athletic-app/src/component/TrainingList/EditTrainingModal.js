import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditTrainingModal, 
    fetchCurrentTraining,
    sagaEditTraining,
    sagaDeleteTraining 
} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditTrainingModal = () => {
    
    const dispatch = useDispatch()
    const currentTraining = useSelector(state => state.training.currentTraining)
    const editTrainingModalIsOpened = useSelector(state => state.training.editTrainingModalIsOpened)

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
                    isOpen={editTrainingModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование тренировки</h6>
                    <form>
                        <input 
                            className='form-control edit-training-modal-input' 
                            type="text" 
                            defaultValue={currentTraining.name} 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentTraining({...currentTraining, name: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-training-modal-input' 
                            type="text" 
                            defaultValue={currentTraining.description} 
                            placeholder='Описание' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentTraining({...currentTraining, description: event.target.value})) 
                                }} />                                
                        <button 
                            className='btn btn-outline-primary edit-training-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditTraining())
                                    dispatch(hideEditTrainingModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary edit-training-modal-delete-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteTraining())
                                    dispatch(hideEditTrainingModal())
                                    }}>Удалить</button>                                    
                        <button 
                            className='btn btn-outline-primary edit-training-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditTrainingModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}