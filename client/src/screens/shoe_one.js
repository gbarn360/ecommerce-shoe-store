import { Suspense } from "react";
import NavBar from "../components/Navbar";
import ModelRenderer from "../components/shoe_one_model"
import {Canvas} from '@react-three/fiber'
import {Stage} from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import '../App.css'
/*
function Shoe_one() {
  const gltf = useLoader(OBJLoader, '../shoe/model_stuff/shoe_model.obj')
  return (
    <Primitive object={gltf}/>
  );
}
*/

function Shoe_one() {
  return (
    <div>
      <NavBar/>
      <Canvas className="shoe_background" camera={{fov:50,zoom:1.3, near: 1, far:1000}}>
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <Suspense fallback={null}>
          <Stage>
            <ModelRenderer />
          </Stage>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Shoe_one;
