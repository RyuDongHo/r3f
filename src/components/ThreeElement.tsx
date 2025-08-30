import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import matcap1Img from "@assets/image.png";
import fiveToneImg from "../assets/fiveTone.jpg";

const ThreeElement = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const matcap1 = useTexture(matcap1Img);
  const tone = useTexture(fiveToneImg);
  tone.minFilter = THREE.NearestFilter;
  tone.magFilter = THREE.NearestFilter;

  useFrame((state, delta) => {});
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry = meshRef.current!.geometry;
        mesh.position.x =
          index * 3 - (3 * groupRef.current!.children.length) / 2;
      });
    }
  }, []);
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={3} />
      <group ref={groupRef} position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 64, 32]} />
          <meshBasicMaterial color={"blue"} side={THREE.FrontSide} />
        </mesh>
        <mesh>
          <meshBasicMaterial wireframe color={"red"} />
        </mesh>
        <mesh>
          <meshLambertMaterial color={"green"} />
        </mesh>
        <mesh>
          <meshPhongMaterial
            color={"purple"}
            shininess={50}
            specular={"white"}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh>
          <meshMatcapMaterial matcap={matcap1} />
        </mesh>
        <mesh>
          <meshToonMaterial gradientMap={tone} />
        </mesh>
      </group>
    </>
  );
};

export default ThreeElement;
