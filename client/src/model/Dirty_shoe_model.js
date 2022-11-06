/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/dirty_shoe_model.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.shoe_stitches.geometry} material={materials.shoe_stitches} scale={0.99} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.shoe_rubber} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.shoe_metal} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.shoe_inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.shoe_suede} />
      <mesh geometry={nodes.shoe_lace_1.geometry} material={materials.shoe_lace} />
      <mesh geometry={nodes.shoe_lace_2.geometry} material={materials.shoe_lace_plastic} />
      <mesh geometry={nodes.shoe_stitches016.geometry} material={nodes.shoe_stitches016.material} scale={0.99} />
      <mesh geometry={nodes.shoe_stitches015.geometry} material={nodes.shoe_stitches015.material} scale={0.88} />
      <mesh geometry={nodes.shoe_stitches001.geometry} material={nodes.shoe_stitches001.material} />
      <mesh geometry={nodes.shoe_stitches014.geometry} material={nodes.shoe_stitches014.material} />
      <mesh geometry={nodes.shoe_stitches013.geometry} material={nodes.shoe_stitches013.material} />
      <mesh geometry={nodes.shoe_stitches012.geometry} material={nodes.shoe_stitches012.material} />
      <mesh geometry={nodes.shoe_stitches011.geometry} material={nodes.shoe_stitches011.material} />
      <mesh geometry={nodes.shoe_stitches010.geometry} material={nodes.shoe_stitches010.material} />
      <mesh geometry={nodes.shoe_stitches009.geometry} material={nodes.shoe_stitches009.material} />
      <mesh geometry={nodes.shoe_stitches008.geometry} material={nodes.shoe_stitches008.material} />
      <mesh geometry={nodes.shoe_stitches007.geometry} material={nodes.shoe_stitches007.material} />
      <mesh geometry={nodes.shoe_stitches006.geometry} material={nodes.shoe_stitches006.material} />
      <mesh geometry={nodes.shoe_stitches005.geometry} material={nodes.shoe_stitches005.material} />
      <mesh geometry={nodes.shoe_stitches004.geometry} material={nodes.shoe_stitches004.material} />
      <mesh geometry={nodes.shoe_stitches003.geometry} material={nodes.shoe_stitches003.material} />
      <mesh geometry={nodes.shoe_stitches002.geometry} material={nodes.shoe_stitches002.material} />
      <mesh geometry={nodes.shoe_stitches000.geometry} material={nodes.shoe_stitches000.material} />
      <mesh geometry={nodes.shoe_stitches_base.geometry} material={nodes.shoe_stitches_base.material} />
    </group>
  )
}

useGLTF.preload('/dirty_shoe_model.glb')
