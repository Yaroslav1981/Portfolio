import {Suspense, useEffect, useState} from 'react';
import { Canvas, extend } from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";
extend({OrbitControls, Preload, useGLTF, CanvasLoader})



const Computers = ({isMobile}) => {
  const computer = useGLTF("../desktop_pc/scene.gltf")
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor='black'/>
      <pointLight intensity={0.5} position-y={0.75} position-z={0.5}/>
      <spotLight position={[-4,5,2]} angle={3} penumbra={1} intensity={500} castShadow shadow-mapSize={1024}/>
      <primitive object={computer.scene} scale={isMobile?0.6:0.75} position={isMobile?[0,-3, -2.2]:[1,-2.5, -1.1]} rotation={[-0.03, -0.45, -0.17]}/>
    </mesh>
  )
}

const ComputersCanvas = ()=>{

  const [isMobile,setIsMobile] = useState(false);

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches);
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return ()=>{
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[]);

  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,3,5], fov:25}}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas