import React, { useRef, useState, useEffect } from 'react';
import {  useFrame, useLoader } from '@react-three/fiber';
import { extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';

function Globe(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  let texture = useLoader(TextureLoader, 'earthmap.jpg');
  console.log(mesh)
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.001))

  useEffect(() => {
    mesh.current.scale.set(2.2, 2.2, 2.2)
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={3}
      size={{height: window.innerHeight, width: window.innerWidth}}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <sphereGeometry args={[1, 50, 50]}/>
      <meshStandardMaterial  map={texture} />
    </mesh>
  )
}

export default Globe;