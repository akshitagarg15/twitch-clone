import React from 'react'
import {Avatar} from '@material-ui/core';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://pngimg.com/uploads/twitch/twitch_PNG6.png" className="header__leftLogo" 
                alt="twitch logo"/>
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header__verticalLine"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i className="fas fa-ellipsis-h"></i>
            </div>
            <div className="header__center">
                <input type="text" placeholder="search"/>
                <div className="header__centerLogoContainer">
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                    <i class="fas fa-crown"></i>
                    <i class="fas fa-inbox"></i>
                    <i class="fas fa-comment-alt"></i>
                    <div className="header__rightBits">
                        <i class="fas fa-gem"></i>
                        <h4>Get Bits</h4>
                    </div>
                    <Avatar/>
                </div>

            
            </div>
            
        </div>
    )
}

export default Header
