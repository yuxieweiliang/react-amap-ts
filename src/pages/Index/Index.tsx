import React from 'react';
import './index.scss'

class Welcome extends React.Component {
  render() {
    return (
        <div className="bg-image">
          <div className="right-top"></div>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <rect width="300" height="100"
                  style={{fill:'rgb(0,0,255)', strokeWidth:1, stroke:'rgb(0,0,0)'}}/>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <polygon
              fill="#6ca4c9"
              stroke="#94cbef"
              strokeWidth="1"
              strokeMiterlimit="1"
              points="15,0 85,0 100,20 0,20 "
            />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" height="800">
            <g  transform="translate(100,100)scale(0.8,0.8)">
              <rect width="100" height="50" fill="blue"></rect>
            </g>
            <rect x="50" y="50" transform="translate(200,200)scale(1.2,1.2)" width="200" height="50" fill="red" />
          </svg>
          <p>WelcomeABC</p>
        </div>
    );
  }
}

export default Welcome;
