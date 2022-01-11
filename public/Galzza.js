/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/galzza.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[5.01, -3.64, 0.19]} scale={[28.32, 28.28, 8.46]}>
        <mesh geometry={nodes['front7inch-nagar'].geometry} material={nodes['front7inch-nagar'].material} />
        <mesh geometry={nodes['front7inch-fanera'].geometry} material={nodes['front7inch-fanera'].material} />
      </group>
      <group position={[9.34, -1.81, 0.12]}>
        <mesh geometry={nodes['buttons-button'].geometry} material={nodes['buttons-button'].material} />
        <mesh geometry={nodes['buttons-button_1'].geometry} material={nodes['buttons-button_1'].material} />
      </group>
      <group position={[5.79, -1.74, 0.2]}>
        <mesh geometry={nodes['front5inch-nagar'].geometry} material={nodes['front5inch-nagar'].material} />
        <mesh geometry={nodes['front5inch-fanera'].geometry} material={nodes['front5inch-fanera'].material} />
      </group>
      <group position={[-6.2, 3.09, -0.75]} rotation={[0, 1.57, 0]}>
        <mesh geometry={nodes['lside-nagar'].geometry} material={nodes['lside-nagar'].material} />
        <mesh geometry={nodes['lside-fanera'].geometry} material={nodes['lside-fanera'].material} />
      </group>
      <group position={[9.19, 13.93, -0.76]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['tside-nagar'].geometry} material={nodes['tside-nagar'].material} />
        <mesh geometry={nodes['tside-fanera'].geometry} material={nodes['tside-fanera'].material} />
      </group>
      <group position={[-22.91, 0.65, 0.52]}>
        <mesh geometry={nodes['cover-nagar'].geometry} material={nodes['cover-nagar'].material} />
        <mesh geometry={nodes['cover-fanera'].geometry} material={nodes['cover-fanera'].material} />
        <mesh geometry={nodes['cover-fanera_1'].geometry} material={nodes['cover-fanera_1'].material} />
      </group>
      <group position={[9.68, -7.67, -0.78]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['bside-nagar'].geometry} material={nodes['bside-nagar'].material} />
        <mesh geometry={nodes['bside-fanera'].geometry} material={nodes['bside-fanera'].material} />
      </group>
      <group position={[24.59, 3.09, -0.75]} rotation={[0, 1.57, 0]}>
        <mesh geometry={nodes['rside-nagar'].geometry} material={nodes['rside-nagar'].material} />
        <mesh geometry={nodes['rside-fanera'].geometry} material={nodes['rside-fanera'].material} />
      </group>
      <group position={[9.17, 1.08, -1.7]}>
        <mesh geometry={nodes['back-nagar'].geometry} material={nodes['back-nagar'].material} />
        <mesh geometry={nodes['back-fanera'].geometry} material={nodes['back-fanera'].material} />
        <mesh geometry={nodes['back-fanera_1'].geometry} material={nodes['back-fanera_1'].material} />
      </group>
      <mesh
        geometry={nodes.logo.geometry}
        material={materials.logo}
        position={[22.06, -5.77, 0.33]}
        scale={[0.7, 0.7, 1]}
      />
      <mesh
        geometry={nodes.labelsbutton.geometry}
        material={nodes.labelsbutton.material}
        position={[10.34, -3.98, 0.43]}
        scale={[28, 28, 1]}
      />
      <mesh
        geometry={nodes.podlogka.geometry}
        material={materials.podlogka}
        position={[7.77, -3.94, -0.11]}
        scale={[1, 0.66, 1]}
      />
      <mesh geometry={nodes.screen.geometry} material={materials.screen} position={[7.77, 4.54, -0.23]} />
    </group>
  )
}

useGLTF.preload('/galzza.glb')
