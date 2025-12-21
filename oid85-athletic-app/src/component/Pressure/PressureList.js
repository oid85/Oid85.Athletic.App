import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import {sagaGetPressureList} from '../../redux/actions/pressureActions'
import {PressureListDayItem} from './PressureListDayItem'
import './styles.css'
import { CreatePressureButton } from './CreatePressureButton'
import { CreatePressureModal } from './CreatePressureModal'

export const PressureList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const pressureList = useSelector(state => state.pressure.pressureList)

    useEffect(() => {
        dispatch(sagaGetPressureList())
    }, [])

    return (
        <React.Fragment>
        {
            !pressureList.result || loading
            ? <Loader/>
            : 
            <div className='pressure-list vertical-container'>
                <CreatePressureButton />
                {
                    <div className='horizontal-container'>
                        <div className='pressure-empty-cell border-style'></div>   
                        {                
                            ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00',
                             '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'
                        ].map((time, index) => (
                                <div className='time-cell border-style'>{time}</div>
                            ))
                        }                                           
                        </div>
                }
                {                
                    pressureList.result.dayItems.map((dayItem, index) => (
                        <PressureListDayItem key = {index} dayItem = {dayItem} />
                    ))
                }
                <CreatePressureModal />
            </div>        
        }
        </React.Fragment>                
    )
}