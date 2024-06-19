import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
renderer.render( scene, camera );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x420420 } ); //MeshBasicMaterial = no Light interaction, MeshStandardMaterial = light interaction
const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(3,3,3);
pointLight.power = 10000;

scene.add(pointLight);

function animate(){
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  

  renderer.render(scene, camera);
}

animate();