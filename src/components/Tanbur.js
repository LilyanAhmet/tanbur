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
 // useFrame(() => (ref.current.rotation.y += 0.02));
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
        <Canvas shadows camera={{ position: [0.4, 0.9, 1.8], fov: 50 }} style={{width:"50%",float:"right"}}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            target={[0, 0.3, 0]}
          />
          <Suspense fallback={null}>
            <Stage
              intensity={0.1}
              contactShadowOpacity={0.7}
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
        <Parallax pages={4} style={{ top: "0", left: "0", width: "50%" }}>
          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              paddingLeft: "20%",
              textAlign: "center",
            }}
          >
            <h2>
              The current Kurdish tanbur is composed of a pear-shaped or ovoid
              body covered by a wooden sounding board.{" "}
            </h2>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2} />

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",

              paddingLeft: "20%",
              textAlign: "center",
            }}
          >
            <h2>
              The body, and especially the sounding board, must be made of
              mulberry wood.
            </h2>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",

              paddingLeft: "20%",
              textAlign: "center",
            }}
          >
            <h2>
              The Neck is made of walnut, mounted with fourteen frets made from
              entrails. The frets are an allusion to the levels of the celestial
              hierarchy.
            </h2>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              paddingLeft: "20%",
              textAlign: "center",
            }}
          >
            <h2>
              Originally, the strings of the tanbur were made of silk or
              entrails, but they were replaced probably a century ago by steel.
            </h2>
          </ParallaxLayer>
        </Parallax>
        <Loader />
      </div>
    </div>
  );
};

export default Tanbur;
