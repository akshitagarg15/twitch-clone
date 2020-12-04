import React from 'react'
import './stream.css'
const Stream = () => {
    return (
      <div className="stream">
        <div className="stream__Container">
          <div className="stream__status">
            <div className="stream__statusContainer">
              <div className="stream__statusContainerTop">
                <div className="stream__statusIndicator">OFFLINE</div>
                <h2>check out below streams from cleverprogrammer</h2>
              </div>
              <div className="stream__statusInfo">
                <i className="fas fa-bell"></i>
                <p>You will be notified when clever programmer will be live</p>
              </div>
            </div>
          </div>
          <div className="stream__videoEmbed">
            <iframe
              width="500"
              height="295"
              frameBorder="0"
              src="https://www.youtube.com/embed/0pFqFGwL9mA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    );
}

export default Stream
