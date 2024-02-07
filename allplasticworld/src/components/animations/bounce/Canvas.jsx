import Bounce from './Bounce'
import {motion} from 'framer-motion'
import {Canvas, useFrame} from '@react-three/fiber'

function Canvascomponent() {
  return (
    <Canvas className="flex md:w-80 w-60" style={{width:"280px"}}>
    <directionalLight position={[0,0,2]}/>
    <ambientLight/>
      <Bounce/>
   </Canvas>
  )
}

export default Canvascomponent