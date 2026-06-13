import * as THREE from "three";
import type { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// Load the file from the public folder
export function load(
  loader: GLTFLoader,
  scene: THREE.Scene<THREE.Object3DEventMap>,
) {
  try {
    loader.load(
      "/3d/round_spectacles.glb",
      (gltf) => {
        // Add the loaded scene to your Three.js scene
        scene.add(gltf.scene);

        // Optional: Scale or reposition
        gltf.scene.scale.set(1, 1, 1);
        console.log("Model loaded successfully!");
      },
      (xhr) => {
        // Progress tracking
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        // Error handling
        console.error("An error happened", error);
      },
    );
  } catch {}
}
