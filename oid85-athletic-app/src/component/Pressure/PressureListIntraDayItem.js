import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const PressureListIntraDayItem = ({key, intraDayItem}) => {

    return (
        <React.Fragment>
            <div className='vertical-container border-style' key={key}>
                {
                    !intraDayItem.sys ? <div></div> : <div className='border-style'>{intraDayItem.sys}</div>
                }
                {
                    !intraDayItem.dia ? <div></div> : <div className='border-style'>{intraDayItem.dia}</div>
                }
                {
                    !intraDayItem.pulse ? <div></div> : <div className='border-style'>{intraDayItem.pulse}</div>
                }
            </div>
        </React.Fragment>
    )
}