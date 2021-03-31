import React, { useRef, useEffect } from 'react';
import {  useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import { CubeTextureLoader } from "three";



function Globe() {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  let texture = useLoader(TextureLoader, 'earthmap.jpg');

  const SkyBox = () => {
    const  {scene}  = useThree();
    const loader = new CubeTextureLoader();

    const texture = loader.load([
      "//unpkg.com/three-globe/example/img/night-sky.png",
      "//unpkg.com/three-globe/example/img/night-sky.png",
      "//unpkg.com/three-globe/example/img/night-sky.png",
      "//unpkg.com/three-globe/example/img/night-sky.png",
      "//unpkg.com/three-globe/example/img/night-sky.png",
      "//unpkg.com/three-globe/example/img/night-sky.png"
    ])

    scene.background = texture;
    return null
  }

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
      <meshStandardMaterial  map={texture} />
    </mesh>
    <SkyBox/>
    </>
  )
}

export default Globe;