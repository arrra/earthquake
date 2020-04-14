import React from 'react';

function EarthquakesColumns() {
  return (
    <div className="quakes__header">
      <div className="quake__column">Magnitude</div>

      <div className="quake__column">Map</div>

      <div className="quake__column">Date & Time</div>

      <div className="quake__column">Depth</div>

      <div className="quake__column">Latitude</div>

      <div className="quake__column">Longitude</div>
    </div>
  );
}

export default EarthquakesColumns;

