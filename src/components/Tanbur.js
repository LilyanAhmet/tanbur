import React, { Suspense, useRef, useState, useEffect } from "react";
//import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { Section } from "./section";
import { proxy, useSnapshot } from "valtio";

const state = proxy({
  current: null,
});
function Tanbur3d(props) {
  const { scene } = useGLTF("/tanbur3dmodel.glb");
  const ref = useRef();
  return (
    <group
      ref={ref}
      dispose={null}
      onClick={(e) => (
        e.stopPropagation(), (state.current = e.object.material.name)
      )}
    >
      <mesh>
        <primitive object={scene} {...props} />
      </mesh>
    </group>
  );
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <Tanbur3d
            scale={-1}
            position={[4, 0, 3]}
            rotation={[0, 16, Math.PI]}
          />
        </mesh>
        <Html >
          <div className="container">
            <h1>Hello</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};
const Tanbur = () => {
  const [Start, set] = useState(true);
  useEffect(() => {
    set(true);
  });
  //maxPolarAngle={Math.PI / 2.8}
  return (
    <div className="container">
   
       
        
          <div className="model-text">
            <Canvas shadows camera={{ position: [0.4, 0.9, 1.8], fov: 50 }}>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                target={[-0.361775, 0.3, 0]}
              />
              <Suspense fallback={null}>
                <Stage
                  intensity={0.5}
                  contactShadowOpacity={0.6}
                  contactShadowBlur={1}
                  adjustCamera={true}
                  environment="city"
                >
                  <HTMLContent />
                </Stage>
              </Suspense>
            </Canvas>
          </div>
        </div>
    
  );
};

export default Tanbur;
