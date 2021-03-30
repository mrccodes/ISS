import Globe from './Globe.js';
import React, { useRef, useEffect, useState, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';

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


