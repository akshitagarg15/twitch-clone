import React from 'react'
import Channel from './Channel'
import './sidebar.css'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="sidebar__top">
          <h5>FOLLOWED CHANNELS </h5>
          <Channel
            avatar="https://lh3.googleusercontent.com/a-/AOh14Ghx9WI-B1ZMCgA0VltPwbrj65FqUoRCyLGMR66ehQ=s600-k-no-rp-mo"
            name="akshita garg"
            followers="100"
          />
          <Channel
            avatar="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
            name="cleverProgrammer"
            followers="820k"
          />
          <Channel
            avatar="https://yt3.ggpht.com/ytc/AAUvwnhCJx15sLiD6RlJg5kcpB1O7W30FAOinYIL5Svs=s88-c-k-c0x00ffffff-no-rj"
            name="gunjanShouts"
            followers="523k"
          />
          <h5>RECOMMENDED CHANNELS </h5>
          <Channel avatar="" name="bhavik garg" followers="150" />
          <p className="sidebar__topShowMore">Show More</p>
        </div>
        <div className="sidebar__bottom">
          <div className="sidebar__bottomContainer">
            <i className="fas fa-search"></i>
            <input type="text" name="" placeholder="Search to Add Friends" id=""/>
          </div>
        </div>
      </div>
    );
}

export default Sidebar

