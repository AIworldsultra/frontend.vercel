import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sky, OrbitControls, Stars } from '@react-three/drei';

export default function WorldSimulator({ worldData, onBack }) {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <button 
        onClick={onBack} 
        style={{ position: 'absolute', top: 20, left: 20, zIndex: 10, padding: '10px', cursor: 'pointer' }}
      >
        Back to Dashboard
      </button>

      <Canvas camera={{ position: [0, 5, 10] }}>
        <OrbitControls />
        
        {/* Atmosphere Logic */}
        {worldData.atmosphere === 'clear' && <Sky sunPosition={[100, 20, 100]} />}
        {worldData.atmosphere === 'foggy' && <fog attach="fog" args={['#ccc', 5, 15]} />}
        {worldData.atmosphere === 'toxic' && <fog attach="fog" args={['green', 2, 10]} />}
        
        {/* Sun Logic */}
        <ambientLight intensity={0.5} />
        {worldData.suns >= 1 && <directionalLight position={[10, 10, 10]} intensity={1} />}
        {worldData.suns >= 2 && <directionalLight position={[-10, 10, -10]} intensity={0.8} color="red" />}
        {worldData.suns >= 3 && <directionalLight position={[0, 10, -10]} intensity={0.5} color="blue" />}

        {/* Terrain */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color={worldData.terrainColor || "green"} />
        </mesh>

        {/* Player Creature */}
        <mesh position={[0, 1, 0]}>
          {worldData.creatureType === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
          {worldData.creatureType === 'cube' && <boxGeometry args={[1, 2, 1]} />}
          {worldData.creatureType === 'capsule' && <capsuleGeometry args={[0.5, 1, 4, 8]} />}
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  );
}
