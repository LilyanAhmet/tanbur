import React, { Component,Suspense} from 'react'
import { Canvas } from "react-three-fiber";
import {  useGLTF } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/tanbur3dmodel.glb");
  return <primitive object={scene} />;
}

export default class ModelWhite extends Component {
    render() {
        return (
            <div id="modelwhite">
                <p>asdasdad</p>
                <Canvas pixelRatio={[1, 2]} camera={{ position: [1, 1.3, 0.3], fov: 60 }}>
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                {/* <OrbitControls /> */}
                </Canvas>
                <p>asdasdad</p>
            </div>
        )
    }
}