import React, { useRef, useEffect } from 'react';
import {  useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { CubeTextureLoader } from "three";
import { Stars } from '@react-three/drei';



function Globe() {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  let earthTexture = useLoader(TextureLoader, 'earthmap.jpg');

  const  {scene}  = useThree();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.y += 0.00003))

  useEffect(() => {
    mesh.current.scale.set(2.3, 2.3, 2.3);
  })

  return (
    <>
    <mesh
      ref={mesh}
      scale={3}
     >
      <sphereGeometry args={[1, 300, 300]}/>
      <meshStandardMaterial  map={earthTexture} />
    </mesh>

    <Stars
    radius={150} // Radius of the inner sphere (default=100)
    depth={100} // Depth of area where stars should fit (default=50)
    count={3000} // Amount of stars (default=5000)
    factor={5} // Size factor (default=4)
    saturation={1} // Saturation 0-1 (default=0)
  />
    </>
  )
}

export default Globe;