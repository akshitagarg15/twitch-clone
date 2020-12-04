import React from 'react'
import './recentItem.css'

const RecentItem = ({url,title}) => {
    return (
      <div className="item">
        <iframe
          width="400"
          height="235"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="item__details">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/Science%20&%20Technology-285×380.jpg"
            alt=""
          />
          <div className="item__detailsText">
            <h4>{title}</h4>
            <p>cleverprogrammer</p>
            <p>science & technology</p>
          </div>
        </div>
      </div>
    );
}

export default RecentItem
