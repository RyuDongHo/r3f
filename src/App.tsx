import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
function App() {
  const { color, gridSize, segment } = useControls({
    color: "green",
    gridSize: { value: 15, min: 1, max: 100, step: 1 },
    segment: { value: 20, min: 2, max: 100, step: 1 },
  });
  return (
    <>
      <Canvas camera={{ fov: 80, near: 1, far: 1000, position: [5, 5, 5] }}>
        <color attach="background" args={[color]} />
        <ThreeElement />

        <OrbitControls
          // minAzimuthAngle={-Math.PI / 4}
          // maxAzimuthAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1}
        />
        {/* 카메라 조작 컨트롤러 */}

        <axesHelper args={[5]} />
        {/* args = 축의 길이 */}

        <gridHelper args={[gridSize, segment, "red", "black"]} />
        {/* args = [그리드 한 칸의 크기, 그리드의 칸 수, 그리드 색상, 축 색상] */}
      </Canvas>
    </>
  );
}

export default App;
