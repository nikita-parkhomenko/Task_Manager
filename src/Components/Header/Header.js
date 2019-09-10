import React from 'react'

import NowDate from './NowDate/NowDate'
import ToDo from './ToDo/ToDo'
import './Header.css'

const Header = (props) => {
    return(
        <div className="Header">
            <h1>Hello from your Task Manager!</h1>
            <div className="header-container">
                <NowDate />
                <ToDo />
            </div>
        </div>
    )
}

export default Header