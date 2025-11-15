import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditExerciseModal, 
    fetchCurrentExercise,
    sagaEditExercise,
    sagaDeleteExercise 
} from '../../redux/actions/exerciseActions'
import { 
    sagaCreateExercise
} from '../../redux/actions/exerciseActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditTrainingDetailExerciseModal = () => {
    
    const dispatch = useDispatch()
    const currentExercise = useSelector(state => state.exercise.currentExercise)
    const editExerciseModalIsOpened = useSelector(state => state.exercise.editExerciseModalIsOpened)

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
                    isOpen={editExerciseModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование упражнения</h6>
                    <form>
                        <label>Номер</label>
                        <input 
                            className='form-control edit-training-detail-exercise-modal-input'                             
                            type="number" 
                            defaultValue={currentExercise.order} 
                            placeholder='Номер' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExercise({...currentExercise, order: event.target.value})) 
                                }} />
                        <label>Вес, кг</label>
                        <input 
                            className='form-control edit-training-detail-exercise-modal-input' 
                            type="number" 
                            defaultValue={currentExercise.weight} 
                            placeholder='Вес, кг' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExercise({...currentExercise, weight: event.target.value})) 
                                }} />
                        <label>Кол-во повторений</label>
                        <input 
                            className='form-control edit-training-detail-exercise-modal-input' 
                            type="number" 
                            defaultValue={currentExercise.countIterations} 
                            placeholder='Кол-во повторений' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExercise({...currentExercise, countIterations: event.target.value})) 
                                }} />
                        <label>Длительность, мин</label>
                        <input 
                            className='form-control edit-training-detail-exercise-modal-input' 
                            type="number" 
                            defaultValue={currentExercise.minutes} 
                            placeholder='Длительность, мин' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExercise({...currentExercise, minutes: event.target.value})) 
                                }} />                                
                        <button 
                            className='btn btn-outline-primary edit-training-detail-exercise-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditExercise())
                                    dispatch(hideEditExerciseModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary edit-training-detail-exercise-modal-delete-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteExercise())
                                    dispatch(hideEditExerciseModal())
                                    }}>Удалить</button>                                    
                        <button 
                            className='btn btn-outline-primary edit-training-detail-exercise-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditExerciseModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}