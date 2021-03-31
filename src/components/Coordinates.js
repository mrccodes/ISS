import React from 'react';

export const Coordinates = (cords, visible) => {
  return visible ? (
    <>
      <h3>Current coordinates</h3>
      <p>Latitude: {cords.lat}</p>
      <p>Longitute: {cords.lng}</p>
    </>
  )
  :
  (
    null
  )
}