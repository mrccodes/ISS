import React, { useRef, useEffect } from 'react';
import {  useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';


function Globe() {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  let texture = useLoader(TextureLoader, 'earthmap.jpg');

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.00015))

  useEffect(() => {
    mesh.current.scale.set(2.3, 2.3, 2.3)
    console.log(mesh.current)

  })

  return (
    <>
    <mesh
      ref={mesh}
      scale={3}
     >
      <sphereGeometry args={[1, 50, 50]}/>
      <meshStandardMaterial  map={texture} />
    </mesh>

    </>
  )
}

export default Globe;