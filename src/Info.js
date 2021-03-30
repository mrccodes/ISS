import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NEWS_API_KEY } from './.keys.js';
import News from './News.js';

const Info = (props) => {
  useEffect(() => {
    console.log(props)
  }, [])

  const onInfoClose = () => {
    props.info.setShowInfo(false);
  };

  const [cords, setCords] = useState({lat: 0, lng: 0})

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://api.wheretheiss.at/v1/satellites/25544')
          .then((res) => {
            let lat = res.data.latitude;
            let lng = res.data.longitude;
            setCords({lat: lat, lng: lng})
          })
    }, 1500);
    return () => clearInterval(interval);
  }, []);


  return props.info.showInfo !== false ? (
    <div id="info">
      <button onClick={onInfoClose} className="closeInfo" >x</button>
      <h2 className="title">International Space Station</h2>
      <h3>Current coordinates</h3>
      <p>Latitude: {cords.lat}</p>
      <p>Longitute: {cords.lng}</p>
      <News/>
    </div>
  )
  :
  null
};

export default Info;