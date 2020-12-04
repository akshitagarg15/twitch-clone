import React from 'react'
import Profile from './Profile'
import Stream from "./Stream";
import './body.css'
const Body = () => {
    return (
        <div className="body">
            <div className="body__left">
                <Stream/>
                <Profile/>
            </div>
            <div className="body__rightPlaceholder">
            
            </div>
        </div>
    )
}

export default Body
