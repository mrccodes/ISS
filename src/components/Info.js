import React, { useEffect, useState } from 'react';
import { Coordinates } from './Coordinates.js'


const Info = (props) => {


  const [cords, setCords] = useState({lat: 0, lng: 0})
  const [showComponents, setShowComponents] = useState(false);
  const onInfoClose = () => {
    props.info.setShowInfo(false);
  };

  useEffect(() => {
    if (props.info.showInfo.getCords) {
      const interval = setInterval(async () => {
          const c = await props.info.showInfo.getCords()
          setCords(c)
        }, props.info.showInfo.cordsInterval);
        return () => clearInterval(interval);
      }
  }, [props.info.showInfo]);


  return props.info.showInfo !== false ? (
    <div id="info">
      <button onClick={onInfoClose} className="closeInfo" ><i class="fas fa-times"></i></button>
      <h2 className="title">{props.info.showInfo.name}</h2>
      {Coordinates(cords, props.info.showInfo.showCords)}
      {props.info.showInfo.components.map((x) =>  {return x})}
    </div>
  )
  :
  null
};

export default Info;