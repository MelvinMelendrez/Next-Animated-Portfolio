import { motion } from "framer-motion-3d";
import { MotionConfig } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import { transition } from "./settings";
import { Canvas, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "./use-smooth-transform";

export function Shapes({ isHover, isPress, mouseX, mouseY }) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      <Camera mouseX={mouseX} mouseY={mouseY} />
      <MotionConfig transition={transition}>
        <motion.group
          center={[0, 0, 0]}
          rotation={[lightRotateX, lightRotateY, 0]}
        >
          <Lights />
        </motion.group>
        <motion.group
          initial={false}
          animate={isHover ? "hover" : "rest"}
          dispose={null}
          variants={{
            hover: { z: isPress ? -0.9 : 0 }
          }}
        >
          <Cube />
          <TorusKnot />
          <Tetrahedron />
          <Octahedron />
        </motion.group>
      </MotionConfig>
    </Canvas>
  );
}

export function Lights() {
  return (
    <>
<spotLight color="#0c0c0c" position={[-10, -10, -10]} intensity={0.2} />
<spotLight color="#0c0c0c" position={[-10, 0, 15]} intensity={0.8} />
<spotLight color="#2288ff" position={[-5, 20, 2]} intensity={0.5} />
<spotLight color="#e3006a" position={[15, 10, -2]} intensity={2} />
<spotLight color="#e3006a" position={[15, 10, 5]} intensity={1} />
<spotLight color="#6e00b3" position={[5, -10, 5]} intensity={0.8} />

    </>
  );
}

export function Cube() {
    return (
      <motion.mesh
      position={[0, 0, -3]}
      scale={1.5}
        variants={{
          hover: {
            x: 1.5, // Mueve el objeto hacia la izquierda
            y: 1, // Mueve el objeto hacia arriba
            z: -0.5, // Acerca el objeto al usuario
            color: "#FF851B",
            rotateX: 0.5,
            rotateY: 30,
            rotateZ: -0.5,
          },
          rest: {
            x: 0,
            y: 0,
            z: 0,
            color: "#fff",
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
      </motion.mesh>
    );
  }
  

export function TorusKnot() {
    return (
      <motion.mesh
      position={[0, 0, -3]}
      scale={1.5}
        variants={{
          hover: {
            x: -1, // Mueve el objeto hacia la izquierda
            y: 1, // Mueve el objeto hacia arriba
            z: 1.2, // Acerca el objeto al usuario
            color: "#000000",
            rotateX: -1.3,
            rotateY: 30,
            rotateZ: -0.6,
          },
          rest: {
            x: 0,
            y: 0,
            z: 0,
            color: "#fff",
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <torusKnotGeometry args={[0.3, 0.1, 64, 8, 2, 3]} />
        <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
      </motion.mesh>
    );
  }
  

  export function Tetrahedron() {
    return (
      <motion.mesh
        position={[-1, -1, 0]}
        rotation={[-0.2, 0.4, 0.3]}
        scale={1.5}
        variants={{
          hover: {
            x: -1.2,
            y: -0.8,
            z: 1,
            rotateY: 30,
            rotateZ: 0.2,
            color: '#00bfff'
          },
          rest: {
            x: -1,
            y: -1,
            z: 0,
            rotateY: 0.4,
            rotateZ: 0.3,
            color: '#fff'
          }
        }}
      >
        <tetrahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
      </motion.mesh>
    );
}

  
export function Dodecahedron() {
    return (
      <motion.mesh
        position={[0, -1, 0]}
        rotation={[-0.5, 0.3, -0.4]}
        scale={1.5}
        variants={{
          hover: {
            y: -0.8,
            z: 1,
            rotateY: 30,
            rotateZ: 0.5,
            color: '#ffa500'
          },
          rest: {
            y: -1,
            z: 0,
            rotateY: 0.3,
            rotateZ: -0.2,
            color: '#fff'
          }
        }}
      >
        <dodecahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
      </motion.mesh>
    );
  }
  
  
export function Octahedron() {
    return (
      <motion.mesh
        position={[0.5, 0.5, 0]}
        scale={1}
        variants={{
          hover: {
            x: 0.3,
            y: 1.5,
            z: 1,
            color: "#0074D9",
            rotateX: 0.8,
            rotateY: 30,
            rotateZ: -0.8,
          },
          rest: {
            x: 0,
            y: 0,
            z: 0,
            color: "#fff",
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <octahedronGeometry args={[0.4]} />
        <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />
      </motion.mesh>
    );
  }
  
    export function Sphere() {
        return (
            <motion.mesh position={[-0.5, -0.5, 0]} variants={{ hover: { z: 2 } }}>
            <sphereGeometry args={[0.4]} />
            <Material />
            </motion.mesh>
        );
    }

    export function Cone() {
    return (
        <motion.mesh
        position={[-0.8, 0.4, 0]}
        rotation={[-0.5, 0, -0.3]}
        variants={{
            hover: {
            z: 1.1,
            x: -1.5,
            rotateX: -0.2,
            rotateZ: 0.4
            }
        }}
        >
        <coneGeometry args={[0.3, 0.6, 20]} />
        <Material />
        </motion.mesh>
    );
    }

    export function Torus() {
    return (
        <motion.mesh
        position={[0.1, 0.4, 0]}
        rotation={[-0.5, 0.5, 0]}
        variants={{
            hover: {
            y: 0.5,
            z: 2,
            rotateY: -0.2
            }
        }}
        >
        <torusGeometry args={[0.2, 0.1, 10, 50]} />
        <Material />
        </motion.mesh>
    );
    }

    export function Icosahedron() {
    return (
        <motion.mesh
        position={[1.1, 0, 0]}
        rotation-z={0.5}
        variants={{
            hover: {
            x: 1.8,
            z: 0.6,
            y: 0.6,
            rotateZ: -0.5
            }
        }}
        >
        <icosahedronGeometry args={[0.7, 0]} />
        <Material />
        </motion.mesh>
    );
    }

    export function Material() {
      return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
    }   

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 350);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [camera, cameraX, scene.position]);

  return (
    <motion.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

const spring = { stiffness: 600, damping: 30 };

const mouseToLightRotation = (v) => (-1 * v) / 140;
