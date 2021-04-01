import { useFrame, useThree, extend } from '@react-three/fiber'
import React, { useRef, useEffect  } from 'react'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({OrbitControls})

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const controls = useRef();
  useEffect(() => {
    controls.current.minDistance = 2.8;
    controls.current.maxDistance = 15;
  })
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

export default CameraControls;