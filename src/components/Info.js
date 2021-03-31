import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NEWS_API_KEY } from '../utils/.keys.js';
import News from './News.js';
import Passengers from './Passengers.js'
import {Coordinates} from './Coordinates.js'
const Info = (props) => {

  const onInfoClose = () => {
    props.info.setShowInfo(false);
  };

  const [cords, setCords] = useState({lat: 0, lng: 0})
  const [showCords, setShowCords] = useState(false);

  useEffect(() => {
    cords.lat !==  0 ? setShowCords(true) : setShowCords(false);
  }, [cords])

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
      {Coordinates(cords, showCords)}
      {props.info.showInfo.components.map((x) =>  {return x})}
    </div>
  )
  :
  null
};

export default Info;