"use client";

import { Keyboard } from "@/components/Keyboard";
import { Environment } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei/core/PerspectiveCamera";
import { useControls } from "leva";


export function Scene() {

    const {positionX, positionY, positionZ, rotationX, rotationY, rotationZ} = useControls({
        positionX: 0, 
        positionY: -0.39, 
        positionZ: 3.7,
        rotationX: Math.PI / 2.5,
        rotationY: 0,
        rotationZ: 0
    });

    return (
        <group>

            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={80} />
            <Keyboard 
            scale={9} 
            position={[0.2, -0.5, 3.8]}
             rotation={[1.6, 0.4, 0]} />
            <Environment files={["/hdr/blue-studio.hdr"]}
            environmentIntensity={0.1} />

            <directionalLight position={[-2, 1.5, 3]}
            intensity={1.5}
            castShadow
            shadow-bias={-0.0002}
            shadow-normalsBias={0.00}
            shadow-mapSize={1024} />
           
        </group>
    )
}