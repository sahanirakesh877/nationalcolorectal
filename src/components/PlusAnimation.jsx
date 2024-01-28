import { Canvas, extend, useFrame } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";
import { useRef } from "react";

extend({ TextGeometry });

const Text = () => {
  const helvetikerRegular = new FontLoader().parse(helvetiker);


  const textOptions = {
    font: helvetikerRegular,
    size: 2,
    height: 0.3,
  };
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (mesh.current !== null) {
      //   mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      //   mesh.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <>
      <mesh ref={mesh} rotation={[0, 0.2, 0.3]}>
        <textGeometry attach="geometry" args={["+", textOptions]} />
        <meshLambertMaterial attach="material" color={"#ef1827"} />
      </mesh>
    </>
  );
};

const Plus = () => {
  return (
    // <div className="h-screen flex justify-center items-center">
    <Canvas style={{ width: "100%", height: "100%" }}>
      <ambientLight color={"#ffffff"} intensity={1.5} />
      <directionalLight color="red" position={[10, 10, 0]} />
      <Text />
    </Canvas>
    // </div>
  );
};

export default Plus;
