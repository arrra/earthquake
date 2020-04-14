import React from 'react';
import Earthquake from './Earthquake';

function EarthquakesList({list}) {
  return (
    <div className="quakes">
      {list.map((item, index) => {
        return <Earthquake key={index} info={item} />;
      })}
    </div>
  );
}
export default EarthquakesList;

