import React, { Suspense, useRef, useState, useEffect } from "react";
//import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
const state = proxy({
    current: null,
  });
function Tanbur3d(props) {
  const { scene } = useGLTF("/tanbur3dmodel.glb");
  const ref = useRef();
  //const snap = useSnapshot(state);
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


const Tanbur = () => {
  const [Start, set] = useState(true);
  useEffect(() => {
    set(true);
  });
  //maxPolarAngle={Math.PI / 2.8}
  return (
    <div className="bg">
      <Canvas shadows camera>
        <PerspectiveCamera
          makeDefault
          position={[0.4, 0.9, 1.8]}
          fov={45}
          zoom={0.9}
        />

        <OrbitControls autoRotate target={[-0.061775, 0.3, 0]} />
        <Suspense fallback={null}>
          <Stage
            intensity={0.5}
            contactShadowOpacity={0.6}
            contactShadowBlur={1}
            adjustCamera={true}
            environment="city"
          >
            <group position={[-1, 0, 0]}>
              <Tanbur3d
                scale={-1}
                position={[1.5, 0, 3]}
                rotation={[0, 0.5, Math.PI]}
              />
              s
            </group>
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Tanbur;