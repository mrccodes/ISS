import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

export const Moon = (props) => {
  const MN = useRef();
//sets position and scale of Moon once the model has loaded
useEffect(() => {
  MN.current.scale.set(0.0009, 0.0009, 0.0009);
  MN.current.position.set(-2.5, 1.2, -4.5);
}, []);

//triggers information panel, panel uses utils passed here to display info/components
const onMoonClick = () => {
  props.setRenderInfo(moonUtils);
}

const moonUtils = {
  name: "The Moon",
  components: [],
  showCords: false,
  discription: "First visited on July 20 1969. "
}

const { scene } = useLoader(GLTFLoader, "/Moon.glb");

return (
  <primitive object={scene} onClick={onMoonClick} ref={MN} dispose={null} />
)

}