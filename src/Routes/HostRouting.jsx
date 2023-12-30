import React from 'react'
import PermanentDrawerLeft from '../container/SideDrawer/SideDrawer'
import { Route, Routes } from 'react-router-dom'
import CreateEvent from '../EventHostAdmin/Regstration/CreateEvent'
import Dashboard from '../EventHostAdmin/Dashboard/Dashboard'

const HostRouting = () => {
  return (
    <div>
      <PermanentDrawerLeft />
        <div>
            {/* <Routes>
            <Route path='/event-register' element={<CreateEvent/>} />
            <Route path='dashboard' element={<Dashboard/>} />
        </Routes> */}
        <Dashboard/>
        </div>
    </div>
  )
}

export default HostRouting;
