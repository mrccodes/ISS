import React, { Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Loader } from '@react-three/drei';
import Globe from './Globe.js';
import CameraControls from './Controls.js'
import Info from './Info.js';
import { SpaceStation } from './Iss/Iss.js';
import Hubble from './Hubble/Hubble.js';
import { Help } from './Help.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderInfo: false,
      setRenderInfo: this.setRenderInfo.bind(this)
    }
  }


  setRenderInfo(val) {
    this.setState({renderInfo: val});
  }

  render() {

     return (
    <>
      <Canvas  onCreated={({ gl, scene }) => {
        console.log(scene)
        gl.outputEncoding = THREE.sRGBEncoding
        scene.background = new THREE.Color('#0b0c0d')} }>
        <CameraControls/>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Suspense fallback={null}>
          <Globe />
          <SpaceStation setRenderInfo={this.state.setRenderInfo}/>
          <Hubble setRenderInfo={this.state.setRenderInfo}/>
        </Suspense>
      </Canvas>
      <Info data={this.state} />
      <Help setRenderInfo={this.state.setRenderInfo}/>
      <Loader />
    </>
  )
}
  }


export default App;