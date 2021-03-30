
import Globe from './Globe.js';
import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import CameraControls from './Controls.js'
import Info from './Info.js';
import Model from './Iss.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      setShowInfo: this.setShowInfo.bind(this)
    }
  }

  setShowInfo(val) {
    this.setState({showInfo: val})
    setTimeout(() => {
      console.log(this.state)
    }, 1000)
  }

  render() {
     return (
    <>
      <Canvas>
        <CameraControls/>
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Suspense fallback={null}>
          <Globe />
          <Model setShowInfo={this.state.setShowInfo}/>
        </Suspense>
      </Canvas>
       <Info info={this.state} />
    </>
  )
}
  }


export default App;