import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";
import { Environment, useHelper, useTexture } from "@react-three/drei";
import matCapImg from "@assets/matcap1.png";
import toneImg from "@assets/fiveTone.jpg";

const LightTest = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const dLight = useRef<THREE.DirectionalLight>(null!);
  const sLight = useRef<THREE.SpotLight>(null!);

  const controls = useControls({
    thickness: { value: 0.1, min: 0.1, max: 10, step: 0.1 },
  });

  const matcap = useTexture(matCapImg);
  const tone = useTexture(toneImg);
  tone.minFilter = THREE.NearestFilter;
  tone.magFilter = THREE.NearestFilter;

  useEffect(() => {
    const meshLengh = groupRef.current!.children.length;
    for (let i = 0; i < meshLengh; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = (i % (meshLengh / 2)) * 2 - 4;
      mesh.position.z = 0;
      if (i >= meshLengh / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);
  useHelper(dLight, THREE.DirectionalLightHelper, 1, "red");
  useHelper(sLight, THREE.SpotLightHelper, "blue");

  return (
    <>
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      {/* <ambientLight intensity={0.5} color={"white"}/> */}
      {/* <hemisphereLight args={["blue", "yellow", 5]} /> */}
      <directionalLight
        castShadow
        ref={dLight}
        position={[5, 5, 5]}
        intensity={7}
        target-position={[0, 0, 0]}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-mapSize={[1024, 1024]}
      />
      {/* <pointLight position={[0, 2, 0]} intensity={5} color={"white"} /> */}
      {/* <spotLight
        ref={sLight}
        color={"white"}
        intensity={70}
        position={[0, 10, 0]}
        distance={100}
        angle={Math.PI / 6}
        penumbra={0.3}
      /> */}

      <Environment files={"./src/assets/hdr1.hdr"} background blur={0} />

      <mesh receiveShadow position={[0, -1, 0]} rotation-x={Math.PI / 2}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
        <mesh castShadow receiveShadow>
          <meshLambertMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            specular={"#fff"}
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshStandardMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={1}
            metalness={0}
            // flatShading={true}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1}
            thickness={controls.thickness}
            ior={2.33}
            // flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshLambertMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            specular={"#fff"}
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshStandardMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={1}
            metalness={0}
            // flatShading={true}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1}
            thickness={controls.thickness}
            ior={2.33}
            // flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshLambertMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            specular={"#fff"}
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshStandardMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={1}
            metalness={0}
            // flatShading={true}
          />
        </mesh>

        <mesh castShadow receiveShadow>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1}
            thickness={controls.thickness}
            ior={2.33}
            // flatShading={true}
          />
        </mesh>
        <mesh castShadow receiveShadow>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
      </group>
    </>
  );
};

export default LightTest;
