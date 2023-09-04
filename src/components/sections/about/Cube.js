import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader.js';
import avatar_1 from '../../../assets/avatars/img01.png';
import avatar_2 from '../../../assets/avatars/img02.png';
import avatar_3 from '../../../assets/avatars/img03.png';
import avatar_4 from '../../../assets/avatars/img04.png';
import avatar_5 from '../../../assets/avatars/img05.png';
import avatar_6 from '../../../assets/avatars/img06.png';



function Box({isMobile,...props}) {

    const mesh = useRef();
    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.006));

    const texture_1 = useLoader(TextureLoader, avatar_1);
    const texture_2 = useLoader(TextureLoader, avatar_5)
    const texture_3 = useLoader(TextureLoader, avatar_2)
    const texture_4 = useLoader(TextureLoader, avatar_4)
    const texture_5 = useLoader(TextureLoader, avatar_3)
    const texture_6 = useLoader(TextureLoader, avatar_6)

    let args = isMobile ? [3,3,3] : [2.5,2.5,2.5];

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args}/>
            <meshStandardMaterial map={texture_1 }attachArray="material" />
            <meshStandardMaterial map={texture_2 }attachArray="material" />
            <meshStandardMaterial map={texture_3 }attachArray="material" />
            <meshStandardMaterial map={texture_4 }attachArray="material" />
            <meshStandardMaterial map={texture_5 }attachArray="material" />
            <meshStandardMaterial map={texture_6 }attachArray="material" />

        </mesh>
    )
}

function Cube({isMobile}) {

    let position = isMobile ? [0,1,0] : [0,0,0]

    return (
        <Canvas colorManagement>
            <ambientLight intensity={0.1} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
                <Box 
                position={position} 
                isMobile={isMobile}
                />
            </Suspense>

        </Canvas>
    );
}

export default Cube
