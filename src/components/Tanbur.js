import React, { Suspense, useRef, useState, useEffect, useMemo } from "react";
//import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF, Html } from "@react-three/drei";
import { Section } from "./section";
import { proxy, useSnapshot } from "valtio";
import state1 from "./state";
const state = proxy({
  current: null,
});
function Tanbur3d(props) {
  const { scene } = useGLTF("/tanbur3dmodel.glb");
  //const copiedScene = useMemo(() => scene.clone(), [scene])
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

const HTMLContent = ({rotation, domContent, children, positionY }) => {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.y += 0.008));
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh ref={ref} position={[0, 0, 0]}>
          <Tanbur3d
            scale={-1}
            rotation={rotation}
          />
        </mesh>
        <Html portal={domContent} fullscreen>
          {children}
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
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state1.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <div className="container-fluid">
      <div className="model-text">
        <Canvas shadows camera={{ position: [0.4, 0.9, 1.8], fov: 50 }}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
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
              <HTMLContent domContent={domContent} rotation={[0, 16, Math.PI]} positionY={248}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="paragraphinfo ">
                      <h2>
                        The current Kurdish tanbur is composed of a pear-shaped
                        or ovoid body covered by a wooden sounding board.{" "}
                      </h2>
                    </div>
                  </div>
                </div>
              </HTMLContent>
              <HTMLContent domContent={domContent} rotation={[0, 16, Math.PI]} positionY={249}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="paragraphinfo ">
                      <h2>
                        The body, and especially the sounding board, must be
                        made of mulberry wood.
                      </h2>
                    </div>
                  </div>
                </div>
              </HTMLContent>
              <HTMLContent domContent={domContent} rotation={[0, 16, Math.PI]} positionY={250}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="paragraphinfo ">
                      <h2>
                        The Neck is made of walnut, mounted with fourteen frets
                        made from entrails. The frets are an allusion to the
                        levels of the celestial hierarchy.
                      </h2>
                    </div>
                  </div>
                </div>
              </HTMLContent>
            </Stage>
          </Suspense>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
          <div style={{ height: `${state1.sections * 100}vh` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Tanbur;
