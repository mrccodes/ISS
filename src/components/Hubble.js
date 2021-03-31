import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';


const Hubble = (props) => {
  const HT = useRef();

  //sets position and scale of ISS once the model has loaded
  useEffect(() => {
    HT.current.scale.set(0.01, 0.01, 0.01)
    HT.current.position.set(-1.5, 1.2, 1.5)
  }, []);

  //triggers information panel
  const onHubbleClick = () => {
    props.setShowInfo(hubbleUtils);
  }

  const hubbleUtils = {
    name: "Hubble Telescope",
    components: [null],
    showCords: false
  }

  const { scene } = useLoader(GLTFLoader, "/Hubble.glb");

  return (
     <primitive  object={scene} onClick={onHubbleClick} ref={HT} dispose={null} />
     )
}

export default Hubble;
