
import Globe from './Globe.js';
import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber';
import CameraControls from './Controls.js'
import Info from './Info.js';
import { SpaceStation } from './Iss/Iss.js';
import Hubble from './Hubble/Hubble.js';
import * as THREE from 'three';
import { Loader } from '@react-three/drei';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      setShowInfo: this.setShowInfo.bind(this)
    }
  }

  setShowInfo(val) {
    this.setState({showInfo: val});
  }

  render() {

     return (
    <>
      <Canvas  onCreated={({ gl, scene }) => {
        gl.outputEncoding = THREE.sRGBEncoding
        scene.background = new THREE.Color('#000')} }>

        <CameraControls/>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Suspense fallback={null}>
          <Globe />
          <SpaceStation setShowInfo={this.state.setShowInfo}/>
          <Hubble setShowInfo={this.state.setShowInfo}/>
        </Suspense>
      </Canvas>
       <Info info={this.state} />
       <Loader />
    </>
  )
}
  }


export default App;