import React, { useRef} from 'react'
import {Html, shaderMaterial, useGLTF, useTexture} from '@react-three/drei'
import {useFrame, useLoader} from "@react-three/fiber";
import * as THREE from "three";
import { useSpring, animated } from '@react-spring/three'
import { extend } from '@react-three/fiber'
import glsl from 'babel-plugin-glsl/macro'

export default function Model(props) {
    const group = useRef()
    const coverUp = useRef()
    const sphereBG = useRef()
    const { nodes, materials } = useGLTF('/galzza.gltf')

    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        group.current.position.y = (8 + Math.sin(t / 2.5)) / 10
       // group.current.rotation.set(0.1 + Math.cos(t / 4.5) / 10, Math.sin(t / 4) / 4, 0.3 - (1 + Math.sin(t / 4)) / 8)
    })

const [image] = useLoader(THREE.TextureLoader, ["/bg.jpg"])
const [image2] = useLoader(THREE.TextureLoader, ["/hb.jpg"])

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

    extend({ BaseShaderMaterial })



    const springAnimation = useSpring({
        config: {mass: 10, tension: 100, friction: 70},
        position: props.showModelstatus ? [0,0,0] : [0.62,0,0],
        colorS: props.showModelstatus ? "#f13454" : "#ffffff",
        rotation: props.showModelstatus
            ? [0, 6, 0]
            : [0,-0.7,0],
    })

    return (
        <mesh ref={sphereBG} {...props}>
            <sphereBufferGeometry args={[100, 32, 32]} />
            <animated.meshPhongMaterial color={springAnimation.colorS} side={THREE.BackSide} />

        <animated.group ref={group} {...props} dispose={null} scale={[4,4,4]} position={[0,0,0]} rotation={springAnimation.rotation}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.torec_bottom_bok.geometry}
                material={nodes.torec_bottom_bok.material}
                position={[-0.01, -0.36, 0.01]}
                rotation={[-Math.PI, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.torec_bottom_pered.geometry}
                    material={nodes.torec_bottom_pered.material}
                    position={[0, 0.43, 0]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.logo_wrap.geometry}
                material={nodes.logo_wrap.material}
                position={[0.22, -0.31, 0.031]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.logo.geometry}
                    material={materials['Material.004']}
                    position={[0, 0.35, 0]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.podkknopkam_bok.geometry}
                material={nodes.podkknopkam_bok.material}
                position={[0, -0.28, 0.032]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.podpisikknopkam_pered.geometry}
                    material={nodes.podpisikknopkam_pered.material}
                    position={[0, 0.25, 0.01]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.buttons.geometry}
                material={nodes.buttons.material}
                position={[-0.06, -0.245, 0.034]}
                rotation={[-Math.PI, 0, 0]}
                scale={0.01}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.screen.geometry}
                material={materials['Material.003']}
                position={[-0.01, -0.12, 0.03]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.01, 0.01, 0.01]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.torec_top_bok.geometry}
                material={nodes.torec_top_bok.material}
                position={[-0.01, 0.06, 0.01]}
                rotation={[-Math.PI, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.torec_top_pered.geometry}
                    material={nodes.torec_top_pered.material}
                    position={[0, 0.43, 0]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pered_bok.geometry}
                material={nodes.pered_bok.material}
                position={[-0.01, -0.15, 0.03]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.pered.geometry}
                    material={nodes.pered.material}
                    position={[-0.07, 0.43, -0.09]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.torec_left_bok.geometry}
                material={nodes.torec_left_bok.material}
                position={[-0.31, -0.16, 0.01]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.torec_left_pered.geometry}
                    material={nodes.torec_left_pered.material}
                    position={[0, 0.43, 0]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.torec_right_bok.geometry}
                material={nodes.torec_right_bok.material}
                position={[0.29, -0.16, 0.01]}
                rotation={[-Math.PI, 0, -Math.PI / 2]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.torec_right_pered.geometry}
                    material={nodes.torec_right_pered.material}
                    position={[0.02, 0.43, 0]}
                />
            </mesh>
            <animated.group position={springAnimation.position} ref={coverUp} >

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.kriwka_bok.geometry}
                    material={nodes.kriwka_bok.material}
                    position={[-0.63, -0.2, 0.05]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.kriwka_pered.geometry}
                        material={nodes.kriwka_pered.material}
                        //map={props.colorMap}
                        position={[0, 0.43, 0]}
                        onClick={(e)=>console.log(e.pageX)}
                    >
                        <baseShaderMaterial  bgMap={image} designMap={image2} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.kriwka_zad.geometry}
                        material={nodes.kriwka_zad.material}
                        position={[0, 0.43, 0]}
                    />
                </mesh>
                <Html
                    style={{
                        color: "#222",
                        opacity: 0.1
                    }}
                    distanceFactor={1.51}
                    position={[-.6, -0.4, 0.061]}
                    transform
                    occlude
                >
                      <span>Ваш текст</span>
                 </Html>
            </animated.group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.zad_bok.geometry}
                material={nodes.zad_bok.material}
                position={[-4.15, -2.64, -4.29]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.zad_pered.geometry}
                    material={nodes.zad_pered.material}
                    position={[414.15, 429, -244.2]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.zad_zad.geometry}
                    material={nodes.zad_zad.material}
                    position={[414.15, 429, -244.2]}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.podlogka.geometry}
                material={nodes.podlogka.material}
                position={[-0.06, -0.27, 0.01]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.2, 1, 0.08]}
            />
        </animated.group>

        </mesh>

    )
}

useGLTF.preload('/galzza.gltf')