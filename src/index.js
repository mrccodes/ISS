import Globe from './Globe.js';
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas } from '@react-three/fiber';
import CameraControls from './Controls.js'



ReactDOM.render(
  <Canvas>
    <CameraControls/>
    <ambientLight />
    <pointLight position={[10, 10, 10]}/>
    <Suspense fallback={null}>
        <Globe />

    </Suspense>
  </Canvas>,
  document.getElementById('root'),
)


