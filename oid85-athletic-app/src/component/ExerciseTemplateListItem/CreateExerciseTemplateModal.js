import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import {hideCreateExerciseTemplateModal, fetchCurrentExerciseTemplate} from '../../redux/actions/exerciseTemplateActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateExerciseTemplateModal = () => {
    
    const dispatch = useDispatch()
    const currentExerciseTemplate = useSelector(state => state.exerciseTemplate.currentExerciseTemplate)
    const createExerciseTemplateModalIsOpened = useSelector(state => state.exerciseTemplate.createExerciseTemplateModalIsOpened)

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
                    isOpen={createExerciseTemplateModalIsOpened}
                    style={customStyles}>
                    <h6>Создать упражнение</h6>
                    <form>
                    <input className='form-control create-exercise-template-modal-input' type="text" placeholder='Наименование' onChange={(event) => {dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, name: event.target.value}));}} />
                    <input className='form-control create-exercise-template-modal-input' type="text" placeholder='Оборудование' onChange={(event) => {dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, equipment: event.target.value}));}} />
                    <input className='form-control create-exercise-template-modal-input' type="text" placeholder='Мышцы' onChange={(event) => {dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, muscles: event.target.value}));}} />
                        <button type='submit' className='btn btn-outline-primary create-exercise-template-modal-save-button'>сохранить</button>
                        <button className='btn btn-outline-primary create-exercise-template-modal-cancel-button' onClick={() => dispatch(hideCreateExerciseTemplateModal())}>закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}