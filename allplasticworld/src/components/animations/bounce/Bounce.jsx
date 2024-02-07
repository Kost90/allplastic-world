import React, { useRef, useState } from 'react'
import {useFrame} from '@react-three/fiber'

function Bounce() {
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  useFrame((state, delta) =>{
    const speed = hovered?0.1:0.3
    ref.current.rotation.x += delta * speed; 
    ref.current.rotation.y += delta * speed; 
  })
  return (
      <mesh position={[0,0,0]} ref={ref} onPointerEnter={(event) => (event.stopPropagation(),setHovered(true))}
      onPointerLeave={() => setHovered(false)}>
        <sphereGeometry args={[2.2,32,37]} />
        <meshStandardMaterial color={hovered?"#17f289":"#2eadeb"} wireframe/>
      </mesh>

  )
}

export default Bounce