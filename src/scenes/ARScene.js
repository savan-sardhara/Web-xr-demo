// src/scenes/ARScene.js
// src/scenes/ARScene.js
import { createXRStore, XR } from '@react-three/xr'
import { Canvas }              from '@react-three/fiber'
import { Suspense, useState }            from 'react'
import CubeModel               from '../components/CubeModel'

// This store controls session start/stop for both AR & VR
const store = createXRStore()
export default function ARScene() {


//   const [scale, setScale] = useState([1, 1, 1]);       // default size
//   const [rotation, setRotation] = useState([0, 0, 0]); // default angle

  return (
    <>
      {/* 
        Whenever the user taps this, WebXR will request an AR session.
        Change to store.enterVR() if you want VR instead.
      */}
      <button
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 20,
          left: 20,
          padding: '0.5em 1em',
        }}
        onClick={() => store.enterAR()}
      >
        Enter AR
      </button>

     {/* Interaction buttons */}
       {/* <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
         <button onClick={() => setScale(prev => prev.map(n => n * 1.2))}>Scale Up</button>
         <button onClick={() => setScale(prev => prev.map(n => n * 0.8))}>Scale Down</button>
         <button onClick={() => setRotation(prev => [prev[0], prev[1] + Math.PI / 8, prev[2]])}>Rotate</button>
       </div> */}

      <Canvas
        onCreated={({ gl }) => {
          // tell Three.js that we want WebXR enabled
          gl.xr.enabled = true
        }}
      >
        {/* pass our store into XR so hooks/useXR() work properly */}
        <XR store={store}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={1} />

      
            

            {/* your cube model */}
            <CubeModel position={[0, 0, -1]} />
          </Suspense>
        </XR>
      </Canvas>
    </>
  )
}




// src/scenes/ARScene.js
// import { Canvas } from '@react-three/fiber';
// import { XR } from '@react-three/xr';
// import { Suspense, useState } from 'react';
// import CubeModel from '../components/CubeModel';

// export default function ARScene() {
//   const [scale, setScale] = useState([1, 1, 1]);       // default size
//   const [rotation, setRotation] = useState([0, 0, 0]); // default angle

//   return (
//     <>
//       {/* Interaction buttons */}
//       <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
//         <button onClick={() => setScale(prev => prev.map(n => n * 1.2))}>Scale Up</button>
//         <button onClick={() => setScale(prev => prev.map(n => n * 0.8))}>Scale Down</button>
//         <button onClick={() => setRotation(prev => [prev[0], prev[1] + Math.PI / 8, prev[2]])}>Rotate</button>
//       </div>

//       <Canvas onCreated={({ gl }) => gl.xr.enabled = true}>
//         <XR>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[0, 5, 5]} intensity={1} />
            
//             {/* Pass dynamic props to cube */}
//             <CubeModel
//               position={[0, 0, -1]}
//               scale={scale}
//               rotation={rotation}
//             />
//           </Suspense>
//         </XR>
//       </Canvas>
//     </>
//   );
// }
