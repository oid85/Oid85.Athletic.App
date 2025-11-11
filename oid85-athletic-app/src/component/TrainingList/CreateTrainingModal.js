import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideCreateTrainingModal, 
    fetchCurrentTraining,
    sagaCreateTraining 
} from '../../redux/actions/trainingActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateTrainingModal = () => {
    
    const dispatch = useDispatch()
    const currentTraining = useSelector(state => state.training.currentTraining)
    const createTrainingModalIsOpened = useSelector(state => state.training.createTrainingModalIsOpened)

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
                    isOpen={createTrainingModalIsOpened}
                    style={customStyles}>
                    <h6>Создать тренировку</h6>
                    <form>
                        <input 
                            className='form-control create-training-modal-input' 
                            type="text" 
                            defaultValue='' 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentTraining({...currentTraining, name: event.target.value})) 
                                } } />
                        <button 
                            className='btn btn-outline-primary create-training-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaCreateTraining())
                                    dispatch(hideCreateTrainingModal())
                                    } }>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary create-training-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideCreateTrainingModal()) 
                                } }>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}