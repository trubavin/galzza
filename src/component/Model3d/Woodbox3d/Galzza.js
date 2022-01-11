import React, {useEffect, useRef, useState} from 'react'
import {PerspectiveCamera, Plane, shaderMaterial, useGLTF, useTexture} from '@react-three/drei'
import {extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import * as THREE from "three";
import glsl from "babel-plugin-glsl/macro";
import { gsap, Linear } from 'gsap'

export default function Model(props) {

  const {screen, color, design, isCoverClosed, isPlayMode, isCameraReset, tl_model, tl_cover, setStopOtherTween ,isTweening} = props
  const allGroup = useRef()
  const model = useRef()
  const cover = useRef()
  const vec = new THREE.Vector3()
  const camera = useThree((state) => state.camera)

  const {nodes, materials} = useGLTF('/galzza.glb')

  useEffect(()=>{

    tl_cover.current = gsap.timeline({paused: true})
    tl_cover.current.to(cover.current.position, { x: 9.2, ease: Linear.easeOut,duration: 1.0 })
    tl_cover.current.to(allGroup.current.position, { x: -10, ease: Linear.easeOut,duration: 1.0 },0)

    tl_model.current = gsap.timeline({paused: true})
    tl_model.current.to(cover.current.position, { z: -25, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(cover.current.rotation, { z: -1.56, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(cover.current.rotation, { x: -1.56, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(cover.current.position, { y: -9.89, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(cover.current.position, { x: 9.19, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(cover.current.position, { z: -13.76, ease: Linear.easeOut,duration: 0.25 })
    tl_model.current.to(allGroup.current.rotation, { x: -0.1, ease: Linear.easeInOut,duration: 0.5 },0.25)
    tl_model.current.to(allGroup.current.position, { y: -2.3, ease: Linear.easeInOut, duration: 0.5},0.5)
    tl_model.current.to(allGroup.current.position, { x: -10, ease: Linear.easeInOut,duration: 0.5 },1)

  },[])

  useEffect(()=>{
    isPlayMode ? tl_model.current.play() : tl_model.current.reverse()
    isCoverClosed ? tl_cover.current.play() : tl_cover.current.reverse()
  },[ isPlayMode,isCoverClosed])




  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!isPlayMode) allGroup.current.position.y = (10*Math.sin(t / 2.5)) / 10
    if (isCameraReset) camera.position.lerp(vec.set(46, 0, 70), 0.1)
    if (tl_model.current || tl_cover.current) {
      if (tl_model.current.isActive() || tl_cover.current.isActive()){
        setStopOtherTween(true)
      } else {
        setStopOtherTween(false)
      }
    }
  })

  const logo = useTexture('./tex/logo_for_3d.jpg')
  logo.flipY = "true"
  const texture = useTexture(color.url_fanera)
  const image = useTexture(color.url_cover)
  const image2 = useTexture(design)
  image2.flipY = "true"


  const BaseShaderMaterial = shaderMaterial({
      bgMap: new THREE.Texture(),
      designMap: new THREE.Texture(),
    },
    // vertex shader
    glsl`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
            gl_Position = projectionMatrix * mvPosition;
            }
          `,
    // fragment shader
    glsl`
            uniform sampler2D bgMap;
            uniform sampler2D designMap;
            varying vec2 vUv;
            void main()
            {
                   vec4 color0 = texture2D(bgMap, vUv).rgba;
                   vec4 color1 = texture2D(designMap, vUv).rgba;
                gl_FragColor = color0 * color1;
        }`
  )
  extend({BaseShaderMaterial})


  return (
    <group position={[0,0,0]} ref={allGroup} {...props} dispose={null}>
      <group position={[0,0,0]} ref={model}>
        {screen === "7_inch" &&
        <>
          <group position={[5.01, -3.64, 0.19]} scale={[28.32, 28.28, 8.46]}>
            <mesh geometry={nodes['front7inch-nagar'].geometry}
                  material={nodes['front7inch-nagar'].material}/>
            <mesh geometry={nodes['front7inch-fanera'].geometry}>
              <meshStandardMaterial map={texture}/>
            </mesh>
          </group>
          <mesh scale={[1, 1.5, 1]} geometry={nodes.screen.geometry} material={materials.screen}
                position={[7.77, 4.54, -0.23]}/>
          <group position={[9.04, -4.37, 0.12]}>
            <mesh geometry={nodes['buttons-button'].geometry} material={nodes['buttons-button'].material}>
              <meshStandardMaterial map={texture}/>
            </mesh>
            <mesh geometry={nodes['buttons-button_1'].geometry}>
              <meshStandardMaterial map={texture}/>
            </mesh>
          </group>
          <mesh geometry={nodes.podlogka.geometry} position={[7.77, -4.53, -0.11]} scale={[1, 0.56, 1]}>
            <meshBasicMaterial color={0x222222}/>
          </mesh>
          <mesh geometry={nodes.labelsbutton.geometry} position={[10.05, -6, 0.43]} scale={[28.56, 28, 1]}>
            <meshBasicMaterial color={0x343434}/>
          </mesh>
        </>
        }
        {screen === "5_inch" &&
        <>
          <group position={[5.79, -1.74, 0.2]}>
            <mesh geometry={nodes['front5inch-nagar'].geometry}
                  material={nodes['front5inch-nagar'].material}/>
            <mesh geometry={nodes['front5inch-fanera'].geometry}>
              <meshStandardMaterial map={texture}/>
            </mesh>
          </group>
          <mesh geometry={nodes.screen.geometry} material={materials.screen} position={[7.77, 4.54, -0.23]}/>
          <group position={[9.34, -1.81, 0.12]}>
            <mesh geometry={nodes['buttons-button'].geometry}>
              <meshStandardMaterial map={texture}/>
            </mesh>
            <mesh geometry={nodes['buttons-button_1'].geometry}>
              <meshStandardMaterial map={texture}/>
            </mesh>
          </group>
          <mesh geometry={nodes.podlogka.geometry} position={[7.77, -3.94, -0.11]} scale={[1, 0.66, 1]}>
            <meshBasicMaterial color={0x222222}/>
          </mesh>
          <mesh geometry={nodes.labelsbutton.geometry} position={[10.34, -3.98, 0.43]} scale={[28, 28, 1]}>
            <meshBasicMaterial color={0x343434}/>
          </mesh>
        </>
        }

        <group position={[-6.2, 3.09, -0.75]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes['lside-nagar'].geometry} material={nodes['lside-nagar'].material}/>
          <mesh geometry={nodes['lside-fanera'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
        </group>
        <group position={[9.19, 13.93, -0.76]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['tside-nagar'].geometry} material={nodes['tside-nagar'].material}/>
          <mesh geometry={nodes['tside-fanera'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
        </group>



        <group position={[9.68, -7.67, -0.78]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes['bside-nagar'].geometry} material={nodes['bside-nagar'].material}/>
          <mesh geometry={nodes['bside-fanera'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
        </group>
        <group position={[24.59, 3.09, -0.75]} rotation={[0, 1.57, 0]}>
          <mesh geometry={nodes['rside-nagar'].geometry} material={nodes['rside-nagar'].material}/>
          <mesh geometry={nodes['rside-fanera'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
        </group>
        <group position={[9.17, 1.08, -1.7]}>
          <mesh geometry={nodes['back-nagar'].geometry} material={nodes['back-nagar'].material}/>
          <mesh geometry={nodes['back-fanera'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
          <mesh geometry={nodes['back-fanera_1'].geometry}>
            <meshStandardMaterial map={texture}/>
          </mesh>
        </group>
        <mesh geometry={nodes.logo.geometry} material={materials.logo} position={[22.06, -5.77, 0.33]}
              scale={[0.7, 0.7, 1]}>
          <meshStandardMaterial map={logo} roughness={0.3} metalness={1} flipY={true} attach="material"/>
        </mesh>


      </group>
      {/*****************************cover********************************************/}

      <group ref={cover} position={[-22.91, 0.65, 0.52]}
      >
        <mesh geometry={nodes['cover-nagar'].geometry} material={nodes['cover-nagar'].material}/>
        <mesh geometry={nodes['cover-fanera'].geometry}>
          <meshStandardMaterial map={texture}/>
        </mesh>
        <mesh geometry={nodes['cover-fanera_1'].geometry}>
          <baseShaderMaterial bgMap={image} designMap={image2}/>
        </mesh>
      </group>

    </group>
  )
}

useGLTF.preload('/galzza.glb')
