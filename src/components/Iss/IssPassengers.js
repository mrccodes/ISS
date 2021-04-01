import React, { useState, useEffect } from 'react';
import '../../css/pass.css';
import axios from 'axios';

const Passengers = () => {
  const [visible, setVisible] = useState(false);
  const [passengers, setPassengers] = useState([]);
  const url = 'https://www.nasa.gov'
  const onShowPassengers = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    //queries api that scrapes nasa website for current iss passengers
    axios.get('http://ec2-54-219-85-89.us-west-1.compute.amazonaws.com:6969/issPassengers')
      .then(res => {
        setPassengers(res.data)
      })
      .catch(console.error)
  }, [])

  return visible === false ? (
    <div onClick={onShowPassengers} className="show-passengers">
      Current ISS Passengers<i class="fas fa-caret-down"></i>
    </div>
  )
  :
  (
    <div >
      <div onClick={onShowPassengers} className="hide-passengers">Hide Passengers
      <i class="fas fa-caret-up"></i></div>

      {passengers.map((x) => {
        return (
          <div>
            <a href={x[1][0] === "/" ? url+x[1] : x[1]} className="astronaut" >{x[0]}</a>
          </div>
        )
      })}
    </div>
  )
};

export default Passengers