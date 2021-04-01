import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {  useLoader } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import {HubblePhotos} from './HubblePhotos.js'

const Hubble = (props) => {
  const HT = useRef();

  //sets position and scale of Hubble Telescope once the model has loaded
  useEffect(() => {
    HT.current.scale.set(0.015, 0.015, 0.015)
    HT.current.position.set(-1.5, 1.2, 1.5)
  }, []);

  //triggers information panel, panel uses utils passed here to diplay info
  const onHubbleClick = () => {
    props.setShowInfo(hubbleUtils);
  }

  const hubbleUtils = {
    name: "Hubble Space Telescope",
    components: [<HubblePhotos />],
    showCords: false,
    discription: "The Hubble Space Telescope was launched into orbit in 1990 and has since made over 1.3 million observations, some of which you can view below!"
  }

  const { scene } = useLoader(GLTFLoader, "/Hubble.glb");

  return (
     <primitive  object={scene} onClick={onHubbleClick} ref={HT} dispose={null} />
     )
}

export default Hubble;
