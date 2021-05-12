import { useFrame, useThree, extend } from '@react-three/fiber'
import React, { useRef, useEffect  } from 'react'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({OrbitControls})

const CameraControls = () => {

  const controls = useRef();
  useEffect(() => {
    controls.current.minDistance = 2.8;
    controls.current.maxDistance = 20;
  })
  const {
    camera,
    gl: { domElement },
  } = useThree();

  useFrame((state) => controls.current.update());
  return (
    <orbitControls ref={controls} args={[camera, domElement]} />
  )
  ;
};

export default CameraControls;