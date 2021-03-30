import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';


const Model = (props) => {
  const iss = useRef();


  //sets position and scale of ISS once the model has loaded
  useEffect(() => {
    iss.current.scale.set(0.002, 0.002, 0.002)
    iss.current.position.set(1.5, 1.5, 1.5)
  }, []);

  //triggers information panel
  const onIssClick = () => {
    props.setShowInfo("iss");
  }

  const { scene } = useLoader(GLTFLoader, "/ISS_stationary.glb");

  return (
     <primitive  object={scene} onClick={onIssClick} ref={iss} dispose={null} />
     )
}

export default Model;
