import "./App.css";
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";
function App() {
  return (
    <>
      <Canvas>
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
