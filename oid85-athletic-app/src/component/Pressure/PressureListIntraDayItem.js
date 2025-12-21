import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { pressureSysColor, pressureDiaColor } from '../../colorHelper'

export const PressureListIntraDayItem = ({key, intraDayItem}) => {

    let sysColor = pressureSysColor(intraDayItem.sys)
    let diaColor = pressureDiaColor(intraDayItem.dia)

    return (
        <React.Fragment>
            <div className='vertical-container border-style' key={key}>
                {!intraDayItem.sys ? <div></div> : <div className='border-style' style={{backgroundColor: sysColor}}>{intraDayItem.sys}</div>}
                {!intraDayItem.dia ? <div></div> : <div className='border-style' style={{backgroundColor: diaColor}}>{intraDayItem.dia}</div>}
                {!intraDayItem.pulse ? <div></div> : <div className='border-style'>{intraDayItem.pulse}</div>}
            </div>
        </React.Fragment>
    )
}