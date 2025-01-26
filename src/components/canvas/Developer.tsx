import { Canvas } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import { OrbitControls } from '@react-three/drei';

const Developer = () => {
  const [modelReady, setModelReady] = useState(false);
  const developerModel = useRef(null);

  useEffect(() => {
    if (developerModel.current) {
      setModelReady(true);
    }
  }, [developerModel]);

  return (
    <div style={{ height: '500px' }}>
      <Canvas camera={{ position: [3, 3, 5], fov: 75 }}>
        {/* Ambient light for soft overall lighting */}
        <ambientLight intensity={0.5} />
        
        {/* Directional light for more focused lighting */}
        <directionalLight position={[10, 10, 10]} intensity={1} />

        {/* Developer model (a larger cube as a placeholder) */}
        {modelReady && (
          <mesh ref={developerModel} scale={5} rotation={[Math.PI / 4, Math.PI / 4, 0]} position={[0, 0, 0]}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        )}

        {/* Orbit Controls to rotate and zoom */}
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Developer;
