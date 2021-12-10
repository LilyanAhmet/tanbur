import React, { Suspense, useRef, useState, useEffect, useMemo } from "react";
//import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stage,
  useGLTF,
  useProgress,
} from "@react-three/drei";
import { proxy } from "valtio";
// React Spring
import { a, useTransition } from "@react-spring/web";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
const state = proxy({
  current: null,
});
function Tanbur3d(props) {
  const { scene } = useGLTF("/tanbur3dmodel.glb");
  const copiedScene = useMemo(() => scene.clone(), [scene])
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.02));
  return (
    <>
      <group
        ref={ref}
        dispose={null}
        onClick={(e) => (
          e.stopPropagation(), (state.current = e.object.material.name)
        )}
      >
        <mesh ref={ref}>
          <primitive object={copiedScene} {...props} />
        </mesh>
      </group>
    </>
  );
}
function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}

const Tanbur = () => {
  const [Start, set] = useState(true);
  useEffect(() => {
    set(true);
  });

  return (
    <div className="container-fluid">
      <div className="model-text">
        <Canvas shadows camera={{ position: [0.4, 0.9, 1.8], fov: 50 }} style={{width:"50%",float:"left"}}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            target={[0, 0.3, 0]}
          />
          <Suspense fallback={null}>
            <Stage
              intensity={0.5}
              contactShadowOpacity={0.6}
              contactShadowBlur={1}
              adjustCamera={true}
              environment="city"
            >
              <group position={[0, 0, 0]}>
                <Tanbur3d scale={-1} rotation={[0, 6, Math.PI]} />
              </group>
            </Stage>
          </Suspense>
        </Canvas>
        <Parallax pages={2} style={{ top: "0", right: "0", width: "50%" }}>
          <ParallaxLayer
            offset={0}
            speed={0.1}
           
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              paddingRight: "20%",
              textAlign: "center",
            }}
          >
            <h2>
            To produce a more powerful, rounder, and warmer sound, Ostad used to adjust the bridge so that the strings were far from the sounding board (from 5 to 7 mm).
            </h2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",

              paddingRight: "20%",
              textAlign: "center",
            }}
          >
            <h2>
            He established the fretting and specified the optimal dimensions for sound distribution and playing.
            </h2>
          </ParallaxLayer>
        </Parallax>
        <Loader />
      </div>
    </div>
  );
};

export default Tanbur;
