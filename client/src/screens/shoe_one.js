import { Suspense } from "react";
import NavBar from "../components/Navbar";
import ModelRenderer from "../components/shoe_one_model"
import {Canvas} from '@react-three/fiber'
import {Stage} from '@react-three/drei'
import { OrbitControls } from "@react-three/drei";
import {useLocation} from 'react-router-dom';

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

  const location = useLocation();

  return (
    <div>
      <NavBar/>
      <div className="shoeHeaderContainer">
        <h1 className="shoeHeader">{location.state.shoeInfo.name}</h1>
      </div>
      <Canvas className="shoe_background" camera={{fov:50,zoom:1.3, near: 1, far:1000}}>
        <OrbitControls enableZoom={false} autoRotate={false}/>
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
