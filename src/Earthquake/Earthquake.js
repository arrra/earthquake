import React from 'react';
import {Link} from 'react-router-dom';

const updateMagnitudeBorder = magnitude => {
  let style = 'quakes__item';
  const HIGH_MAGNITUDE = 8;
  style = magnitude >= HIGH_MAGNITUDE ? `${style} bg-danger` : style;
  return style;
};

function Earthquake({info}) {
  return (
    <div className={updateMagnitudeBorder(info.magnitude)} key={info.index}>
      <div className="quake__column">{info.magnitude}</div>

      <div className="quake__column">
        <Link to={`/map?lat=${info.lat}&lng=${info.lng}`}>
          <button type="button" className="btn">
            Map
          </button>
        </Link>
      </div>

      <div className="quake__column">
        <p>{info.datetime}</p>
      </div>

      <div className="quake__column">
        <p>{info.depth}</p>
      </div>

      <div className="quake__column">
        <p>{info.lat}</p>
      </div>

      <div className="quake__column">
        <p>{info.lng}</p>
      </div>
    </div>
  );
}

export default Earthquake;
