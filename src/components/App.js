
import Globe from './Globe.js';
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import CameraControls from './Controls.js'
import Info from './Info.js';
import { SpaceStation } from './Iss/Iss.js';
import Hubble from './Hubble.js';

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
      <Canvas backgroundImageUrl={"unpkg.com/three-globe/example/img/night-sky.png"}>
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
    </>
  )
}
  }


export default App;