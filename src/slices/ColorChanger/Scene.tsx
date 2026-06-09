import { Keyboard } from "@/components/Keyboard";


type SceneProps = {
    selectedTextureId: string;
    onAnimationComplete: () => void;
};

export function Scene({
     selectedTextureId, 
     
     onAnimationComplete 
    }: SceneProps) {
       return(
        <group>
            <Keyboard />
        </group>
    )
}
