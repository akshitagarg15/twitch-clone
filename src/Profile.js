import React from 'react'
import './Profile.css'
import RecentItem from './RecentItem'
const Profile = () => {
    return (
      <div className="profile">
        <img
          src="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div className="profile__topLeft">
          <div className="profilr__topLeftDetails">
            <h1>Clever Programmer</h1>
            <h3>820k followers</h3>
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
        <div className="profile__menu">
          <h2 className="active">Home</h2>
          <h2>About</h2>
          <h2>Schedule</h2>
          <h2>Videos</h2>
          <h2>
            <i className="fas fa-arrow-up"></i>
          </h2>
          <h2>Chat</h2>
        </div>
        <div className="profile__recent">
          <h2>Recent broadcasts</h2>
          <div className="profile__recentItems">
            <RecentItem
              url={"https://www.youtube.com/embed/TxggrQ0nHjY"}
              title={"Robinhood Clone"}
            />
            <RecentItem
              url={"https://www.youtube.com/embed/TxggrQ0nHjY"}
              title={"Robinhood Clone"}
            />
            <RecentItem
              url={"https://www.youtube.com/embed/B-kxUMHBxNo"}
              title={"Facebook Clone"}
            />
            <RecentItem
              url={"https://www.youtube.com/embed/TxggrQ0nHjY"}
              title={"Robinhood Clone"}
            />
          </div>
          <div className="profile__categories">
            <h2>cleverprogrammer's recently streamed categories</h2>
            <img
              src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-144x192.jpg"
              alt=""
            />
            <h3>Science and Technology</h3>
          </div>
        </div>
      </div>
    );
}

export default Profile
