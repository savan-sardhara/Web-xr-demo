// src/components/CubeModel.js
import { useGLTF } from '@react-three/drei';

export default function CubeModel(props) {
  // Load the GLTF model from the public folder
  const { scene } = useGLTF('/models/cube/Cube.gltf');

  return (
    // Render the loaded scene
    <primitive object={scene} {...props} />
  );
}

// // If you want to scale or position the cube differently:
// // <primitive object={scene} scale={[0.5, 0.5, 0.5]} position={[0, 0, -1]} />


// src/components/CubeModel.js
// import { useGLTF } from '@react-three/drei';

// export default function CubeModel({ position, scale, rotation }) {
//   const { scene } = useGLTF('/models/cube/Cube.gltf');

//   return (
//     <primitive
//       object={scene}
//       position={position}
//       scale={scale}        // 👈 dynamic scaling
//       rotation={rotation}  // 👈 dynamic rotation
//     />
//   );
// }
