"use client";

import { Keyboard } from "@/components/Keyboard";
import { Keycap } from "@/components/Keycap";
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

    const scalingFactor = window.innerWidth <= 500 ? .5 : 1;
    
    return (
        <group>

            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={80} />


            <group scale={scalingFactor}> 
            <Keyboard 
            scale={9} 
            position={[0.2, -0.5, 3.8]}
             rotation={[1.6, 0.4, 0]} /> 
            
            <group>
                <Keycap position={[0, -0.4, 3.2]} rotation={[0, 2, 3]} texture={0} />
                <Keycap position={[-1.4, 0, 4.2]} rotation={[3, 2, 1]} texture={1} />
                <Keycap position={[-1.8, 1, 3.4]} rotation={[0, 1, 3]} texture={2} />
                <Keycap position={[0, 1, 4.2]} rotation={[0, 4, 2]} texture={3} />
                <Keycap position={[0.7, 0.9, 4.2]} rotation={[3, 2, 0]} texture={4} />
                <Keycap position={[1.3, -0.3, 3.4]} rotation={[1, 2, 0]} texture={5} />
                <Keycap position={[0, 1, 4.2]} rotation={[2, 2, 3]} texture={6} />
                <Keycap position={[-0.7, 0.6, 3.0]} rotation={[1, 4, 0]} texture={7} />
                <Keycap position={[-0.77, 0.1, 4.5]} rotation={[3, 2, 3]} texture={8} />
                <Keycap position={[2, 0, 4.2]} rotation={[0, 0, 3]} texture={7} />
            </group>
            </group>
            
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