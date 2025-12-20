import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MainScreen } from '../Screens/MainScreen'
import { PressureScreen } from '../Screens/PressureScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Главная</Tab>
                    <Tab>Давление</Tab>
                </TabList>
                <TabPanel>
                    <PressureScreen />
                </TabPanel>
                <TabPanel>
                    <PressureScreen />
                </TabPanel>                
            </Tabs>
        </React.Fragment>
    )    
}
