import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideCreatePressureModal, 
    fetchCurrentPressure,
    sagaCreatePressure 
} from '../../redux/actions/pressureActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreatePressureModal = () => {
    
    const dispatch = useDispatch()
    const currentPressure = useSelector(state => state.pressure.currentPressure)
    const createPressureModalIsOpened = useSelector(state => state.pressure.createPressureModalIsOpened)

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
                    isOpen={createPressureModalIsOpened}
                    style={customStyles}>
                    <h6>Новое измерение</h6>
                    <form>
                        <label>Наименование</label>
                        <input 
                            className='form-control create-pressure-modal-input' 
                            type="number"                              
                            placeholder='SYS' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentPressure({...currentPressure, sys: event.target.value})) 
                                }} />
                        <input 
                            className='form-control create-pressure-modal-input' 
                            type="number"                              
                            placeholder='DIA' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentPressure({...currentPressure, dia: event.target.value})) 
                                }} />
                        <input 
                            className='form-control create-pressure-modal-input' 
                            type="number"                              
                            placeholder='PULSE' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentPressure({...currentPressure, pulse: event.target.value})) 
                                }} />                                                                
                        <button 
                            className='btn btn-outline-primary create-pressure-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaCreatePressure())
                                    dispatch(hideCreatePressureModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary create-pressure-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideCreatePressureModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}