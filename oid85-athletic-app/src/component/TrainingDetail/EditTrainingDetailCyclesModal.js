import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditTrainingDetailCyclesModal, 
    fetchTrainingDetail,
    sagaTrainingDetailCycles
} from '../../redux/actions/trainingDetailActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditTrainingDetailCyclesModal = () => {
    
    const dispatch = useDispatch()
    const trainingDetail = useSelector(state => state.trainingDetail.trainingDetail)
    const editTrainingDetailCyclesModalIsOpened = useSelector(state => state.trainingDetail.editTrainingDetailCyclesModalIsOpened)

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
                    isOpen={editTrainingDetailCyclesModalIsOpened}
                    style={customStyles}>
                    <h6>Редактирование кол-ва циклов</h6>
                    <form>
                        <label>Кол-во циклов</label>
                        <input 
                            className='form-control edit-training-detail-cycles-modal-input'                             
                            type="number" 
                            defaultValue={trainingDetail.cycles} 
                            placeholder='Кол-во циклов' 
                            onChange={ (event) => { 
                                dispatch(fetchTrainingDetail({...trainingDetail, cycles: event.target.value})) 
                                }} />                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-cycles-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaTrainingDetailCycles())
                                    dispatch(hideEditTrainingDetailCyclesModal())
                                    }}>Сохранить</button>                               
                        <button 
                            className='btn btn-outline-primary edit-training-detail-cycles-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditTrainingDetailCyclesModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}