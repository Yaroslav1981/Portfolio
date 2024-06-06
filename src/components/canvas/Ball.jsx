import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber"
import {
  Decal,Float, OrbitControls, Preload, useTexture
} from "@react-three/drei"
import CanvasLoader from "../Loader";




const Ball = ({icon}) => {
  const [decal] = useTexture([icon]);
  return (
    <Float speed={5} rotationIntensity={1} floatIntensity={2} >
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]} />
      {/* <spotLight position={[-5,5,2]} angle={3} penumbra={1} intensity={400} castShadow shadow-mapSize={1024}/> */}
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1,2]}/>
        <meshStandardMaterial 
        color='#fff8eb'
        polygonOffset
        flatShading
        polygonOffsetUnits={5}
        
        />
        <Decal
          position={[0,0,1]}
          rotation={[2* Math.PI,0,6.25]}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon})=>{
  return(
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate={true}
        autoRotateSpeed={4}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI/ 2}
        enableZoom={false}/>
        <Ball icon={icon}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default BallCanvas