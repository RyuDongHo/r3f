import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxMeshRef = useRef<THREE.Mesh>(null);
  const secondBoxMeshRef = useRef<THREE.Mesh>(null);
  // const { size, gl, scene } = useThree();
  const { rotationX, x, y, z } = useControls({
    rotationX: { value: 0, min: -360, max: 360, step: 0.3 },
    x: { value: 0, min: -10, max: 10, step: 0.1 },
    y: { value: 0, min: -10, max: 10, step: 0.1 },
    z: { value: 0, min: -10, max: 10, step: 0.1 },
  });
  const { width, height, depth, widthSegment, heightSegment, depthSegment } =
    useControls({
      width: { value: 1, min: 0, max: 5, step: 0.1 },
      height: { value: 1, min: 0, max: 5, step: 0.1 },
      depth: { value: 1, min: 0, max: 5, step: 0.1 },
      widthSegment: { value: 1, min: 1, max: 10, step: 1 },
      heightSegment: { value: 1, min: 1, max: 10, step: 1 },
      depthSegment: { value: 1, min: 1, max: 10, step: 1 },
    });
  const { clock } = useThree();
  useFrame((state, delta) => {
    // 박스 회전
    if (boxMeshRef.current) {
      boxMeshRef.current.rotation.y += Math.sin(delta);
      boxMeshRef.current.position.x = Math.cos(clock.getElapsedTime()) * 3;
      boxMeshRef.current.position.z = Math.sin(clock.getElapsedTime()) * 3;
    }
  });
  useEffect(() => {
    if (boxMeshRef.current && secondBoxMeshRef.current) {
      secondBoxMeshRef.current.geometry = boxMeshRef.current.geometry;
    }
  }, [boxMeshRef.current?.geometry]);
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <group position={[3, 0, 0]}>
        <mesh
          ref={boxMeshRef}
          rotation={[rotationX, THREE.MathUtils.degToRad(45), 0]}
          position={[x, y, z]}
          scale={[1, 1, 1]}
        >
          <boxGeometry
            args={[
              width,
              height,
              depth,
              widthSegment,
              heightSegment,
              depthSegment,
            ]}
          />
          <meshStandardMaterial color={"blue"} />
        </mesh>

        <mesh ref={secondBoxMeshRef} position={[0, 0, 0]} scale={[1, 1, 1]}>
          <meshStandardMaterial wireframe />
        </mesh>
      </group>
    </>
  );
};

export default ThreeElement;
