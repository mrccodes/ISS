import React, { useEffect, useState } from 'react';
import { Coordinates } from './Coordinates.js'


const Info = (props) => {
  //if props.data.renderInfo is false, render nothing
  //otherwise, props.data.renderInfo = data for info panel
  const [cords, setCords] = useState({lat: "Locating...", lng: "The ISS..."})
  const showCords = props.data.renderInfo.showCords;
  const intervalLength = props.data.renderInfo.cordsInterval;

  useEffect(() => {
    if (showCords) {
      const interval = setInterval(async () => {
        const c = await props.data.renderInfo.getCords()
        setCords(c)
      }, intervalLength);
      return () => clearInterval(interval);
    }
  }, [showCords]);

  const onInfoClose = () => {
    props.data.setRenderInfo(false);
  };

  return props.data.renderInfo !== false ? (
    <div id="info">
      <button onClick={onInfoClose} className="closeInfo" ><i class="fas fa-times"></i></button>
      <div className="title"><h2>{props.data.renderInfo.name}</h2></div>
      {Coordinates(cords, showCords)}
      <p>{props.data.renderInfo.discription}</p>
      {props.data.renderInfo.components.map((x) =>  {return x})}
    </div>
  )
  :
  null
};

export default Info;