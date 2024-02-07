import Bounce from './Bounce'
import {Canvas} from '@react-three/fiber'
import styles from './Canvas.module.css'

function Canvascomponent() {
  return (
    <Canvas className={styles.canvas}>
    <directionalLight position={[0,0,2]}/>
    <ambientLight/>
      <Bounce/>
   </Canvas>
  )
}

export default Canvascomponent