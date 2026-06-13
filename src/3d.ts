import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// 1. Scene & Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;

// 2. Renderer
export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// light
const light = new THREE.AmbientLight(0xffffff, 1); // soft white light
scene.add(light);

// 3. Object
const cubeGeometry = new THREE.BoxGeometry(1, 2, 1);
const cubeMaterial = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

const geometry = new THREE.BoxGeometry(1, 2, 1);
const material = new THREE.MeshNormalMaterial();
const cyinder = new THREE.Mesh(geometry, material);
// scene.add(cyinder);

// 4. Animation Loop
function animate() {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const controls = new OrbitControls(camera, renderer.domElement);
const loader = new GLTFLoader();

// 5. Handle Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
