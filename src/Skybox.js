import React from "react";
import {  useThree, useFrame } from "react-three-fiber";
import { CubeTextureLoader } from "three";

export const SkyBox = () => {
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