import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useFrame, useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';


export const Model = (props) => {
  const iss = useRef();

  useEffect(() => {
    iss.current.scale.set(0.004, 0.004, 0.004)
    iss.current.position.set(1.5, 1.5, 1.5)
    console.log(iss.current)
  }, []);

  const onIssClick = () => {
    console.log("YOU CLICKED THE ISS!!")
  }

  const { scene } = useLoader(GLTFLoader, "/ISS_stationary.glb");




  return <primitive  object={scene} onClick={onIssClick} ref={iss} dispose={null} />
}

