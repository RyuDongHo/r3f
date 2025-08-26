import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxMeshRef = useRef<THREE.Mesh>(null);
  const { size, gl, scene } = useThree();

  useFrame((state, delta) => {
    // 박스 회전
    if (boxMeshRef.current) {
      boxMeshRef.current.rotation.y += delta;
    }
  });

  console.log("render");
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]} ref={boxMeshRef}>
        <boxGeometry />
        <meshStandardMaterial color={"blue"} />
      </mesh>
    </>
  );
};

export default ThreeElement;
