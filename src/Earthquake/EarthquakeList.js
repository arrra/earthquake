import React from 'react';
import Earthquake from './Earthquake';
import EarthquakesColumns from './EarthquakeColumns';

function EarthquakesList({list}) {
  return (
    <div className="quakes">
      <EarthquakesColumns />
      {list.map((item, index) => {
        return <Earthquake key={index} info={item} />;
      })}
    </div>
  );
}
export default EarthquakesList;
