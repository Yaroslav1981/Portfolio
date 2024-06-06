import {Suspense} from 'react';
import {Canvas} from "@react-three/fiber"
import {Decal,Float, OrbitControls, Preload, useGLTF} from "@react-three/drei"
import CanvasLoader from "../Loader";





const Earth = () => {
  const planet = useGLTF("../planet/scene.gltf");
  return (

      
      <primitive object={planet.scene} scale={2.5} position-y={0} rotation-y={0}/>
      
    
  )
}

const EarthCanvas = ()=>{
  return(
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer: true}}
    camera={{
      fov:35,
      near:0.1,
      far:200,
      position: [-4,3,6]
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default EarthCanvas