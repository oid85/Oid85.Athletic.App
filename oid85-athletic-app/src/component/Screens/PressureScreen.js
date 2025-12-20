import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { PressureList } from '../Pressure/PressureList'
import './styles.css'

export const PressureScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <PressureList />
            </div>            
        </React.Fragment>
    )    
}
