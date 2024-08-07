/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 scene.gltf 
Author: Azterisk (https://sketchfab.com/azterisk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sparkle-emoji-3d-cc036a641f99490e95bde0098c85ab29
Title: Sparkle Emoji 3D
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Circle001_Material002_0.geometry} material={materials['Material.002']} rotation={[0, 0, -Math.PI]} scale={100} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
