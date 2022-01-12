import React, {Suspense, useEffect, useRef, useState} from 'react';
import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber'
import {
    Circle,
    ContactShadows, Cylinder,
    Environment,
    Html, MeshReflectorMaterial,
    OrbitControls,
    OrthographicCamera,
    Stage,
    useProgress,
    PresentationControls
} from "@react-three/drei";
import {useSelector} from "react-redux";
import Galzza from "./Woodbox3d/Galzza.js";
import Loader from "./Loader";
import ControlButtons from "./ControlButtons";


const Model3d = () => {

    const ww = document.documentElement.clientWidth || document.body.clientWidth
    const wh = window.innerHeight
    const aspect = ww/wh

    const screen = useSelector((state) => state.product.screen)
    const color = useSelector((state) => state.product.color)
    const design = useSelector((state) => state.product.design)

    const tl_model = useRef()
    const tl_cover = useRef()

    const [isCoverClosed, setCloseCover] = useState(false)
    const [isPlayMode, setChangeMode] = useState(false)
    const [isCameraReset, setCameraReset] = useState(false)
    const [isTweening, setStopOtherTween] = useState(false)

    const closeCover = () => {
        setCloseCover(!isCoverClosed)
    }
    const changeMode = () => {
        setChangeMode(!isPlayMode)
    }
    const initCameraReset = () => {
        setCameraReset(true)
        setTimeout(()=>{
            setCameraReset(false)
        },900)
    }


     return (
        <>
            <ControlButtons
              isCoverClosed={isCoverClosed}
              closeCover={closeCover}
              isPlayMode={isPlayMode}
              changeMode={changeMode}
              initCameraReset={initCameraReset}
              isTweening={isTweening}
            />
            <Canvas shadows   pixelRatio={window.devicePixelRatio} onCreated={ ({ gl }) => { gl.physicallyCorrectLights = true}} camera={{ far: 1000, fov: 35,  aspect: aspect, position: [46,0,70]  }}  style={{width: '100%', height: '100%'} }>
                <ambientLight intensity={0.6} />
                <directionalLight
                    position={[-20, -15, 20]}
                    intensity={0.8}
                    color={0xfffbe5}
                    castShadow
                />
                <directionalLight
                    position={[0, 0, 50]}
                    intensity={0.8}
                    castShadow
                />
                <color attach="background" args={['#e5e5e5']} />

                <Suspense fallback={ <Loader /> }>
                    {screen != "10inch" &&
                        <Galzza
                            screen={screen}
                            color={color}
                            design={design}
                            isCoverClosed={isCoverClosed}
                            isPlayMode={isPlayMode}
                            isCameraReset={isCameraReset}
                            tl_model={tl_model}
                            tl_cover={tl_cover}
                            isTweening={isTweening}
                            setStopOtherTween={setStopOtherTween}
                        />
                    }

                    {/*{screen === "10inch"&&*/}
                    {/*    <Model />*/}
                    {/*}*/}
                {/*<Environment preset="city" />*/}
                </Suspense>
                <ContactShadows rotation-x={Math.PI / 2} position={[0, -15, 0]} opacity={0.5} width={200} height={200} blur={1} far={200} />
                {/*<OrbitControls*/}
                {/*    //autoRotate*/}
                {/*    // enableDamping={true}*/}
                {/*    // dampingFactor={0.25}*/}
                {/*    // rotateSpeed={0.4}*/}
                {/*    // keyPanSpeed={0.4}*/}
                {/*    // screenSpacePanning={true}*/}
                {/*    // zoomSpeed={0.6}*/}
                {/*    // enablePan={true}*/}
                {/*    // panSpeed={2.4}*/}
                {/*    // minPolarAngle={Math.PI / 6}*/}
                {/*    // maxPolarAngle={Math.PI /1.5}*/}
                {/*    // minDistance={60}*/}
                {/*    // maxDistance={180}*/}
                {/*/>*/}
                <OrbitControls
                  enablePan={false}
                  autoRotate={isPlayMode}
                  minPolarAngle={Math.PI / 2}
                  maxPolarAngle={Math.PI / 2.2}
                  minDistance={60}
                  maxDistance={120}
                />
            </Canvas>

        </>
    );
};

export default Model3d;
