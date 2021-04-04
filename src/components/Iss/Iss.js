import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { getIssCords } from '../../utils/issHelpers.js'
import News from './IssNews.js'
import Passengers from './IssPassengers.js'

export const SpaceStation = (props) => {
  const iss = useRef();

  //sets position and scale of ISS once the model has loaded
  useEffect(() => {
    iss.current.scale.set(0.003, 0.003, 0.003)
    iss.current.position.set(1.45, 1.45, 1.45)
  }, []);

  //triggers information panel
  const onIssClick = () => {
    props.setRenderInfo(issUtils);
  }

  const issUtils = {
    name: "International Space Station",
    showCords: true,
    getCords: getIssCords,
    discription: "The International Space Station was launched in 1998, and has been in low Earth orbit since. It is a modular space station built in collaboration between NASA, Roscosomos, JAXA, ESA, and CSA.",
    cordsInterval: 1500,
    components: [<News/>, <Passengers/>]
  }

  const { scene } = useLoader(GLTFLoader, "/ISS_stationary.glb");

  return (
     <primitive  object={scene} onClick={onIssClick} ref={iss} dispose={null} />
     )
}


