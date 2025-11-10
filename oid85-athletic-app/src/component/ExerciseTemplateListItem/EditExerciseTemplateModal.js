import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditExerciseTemplateModal, 
    fetchCurrentExerciseTemplate,
    sagaEditExerciseTemplate,
    sagaDeleteExerciseTemplate 
} from '../../redux/actions/exerciseTemplateActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditExerciseTemplateModal = () => {
    
    const dispatch = useDispatch()
    const currentExerciseTemplate = useSelector(state => state.exerciseTemplate.currentExerciseTemplate)
    const editExerciseTemplateModalIsOpened = useSelector(state => state.exerciseTemplate.editExerciseTemplateModalIsOpened)

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
                    isOpen={editExerciseTemplateModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование упражнения</h6>
                    <form>
                        <input 
                            className='form-control edit-exercise-template-modal-input' 
                            type="text" 
                            defaultValue={currentExerciseTemplate.name} 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, name: event.target.value})) 
                                } } />
                        <input 
                            className='form-control edit-exercise-template-modal-input' 
                            type="text" 
                            defaultValue={currentExerciseTemplate.equipment} 
                            placeholder='Оборудование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, equipment: event.target.value})) 
                                } } />
                        <input 
                            className='form-control edit-exercise-template-modal-input' 
                            type="text" 
                            defaultValue={currentExerciseTemplate.muscles} 
                            placeholder='Группы мышц' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentExerciseTemplate({...currentExerciseTemplate, muscles: event.target.value})) 
                                } } />
                        <button 
                            className='btn btn-outline-primary edit-exercise-template-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditExerciseTemplate())
                                    dispatch(hideEditExerciseTemplateModal())
                                    } }>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary edit-exercise-template-modal-delete-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteExerciseTemplate())
                                    dispatch(hideEditExerciseTemplateModal())
                                    } }>Удалить</button>                                    
                        <button 
                            className='btn btn-outline-primary edit-exercise-template-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditExerciseTemplateModal()) 
                                } }>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}