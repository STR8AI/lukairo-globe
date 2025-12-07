const container = document.getElementById('lukairo-hero');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 6);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Soft fill light with a rim highlight.
scene.add(new THREE.AmbientLight(0x335577, 0.7));
const dirLight = new THREE.DirectionalLight(0xffffff, 1.1);
dirLight.position.set(5, 3, 5);
scene.add(dirLight);

// Starfield backdrop for depth.
(function addStars(count = 8000) {
  const starGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 200;
    positions[i3 + 1] = (Math.random() - 0.5) * 200;
    positions[i3 + 2] = (Math.random() - 0.5) * 200;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMat = new THREE.PointsMaterial({ color: 0x88aaff, size: 0.5, sizeAttenuation: true, transparent: true, opacity: 0.7 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);
})();

// Globe with a subtle shine.
const loader = new THREE.TextureLoader();
const earthTexture = loader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg');
const bumpMap = loader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png');
const globe = new THREE.Mesh(
  new THREE.SphereGeometry(2, 64, 64),
  new THREE.MeshPhongMaterial({
    map: earthTexture,
    bumpMap,
    bumpScale: 0.05,
    specular: 0x222222,
    shininess: 15,
  })
);
scene.add(globe);

// Thin atmosphere glow.
const atmosphere = new THREE.Mesh(
  new THREE.SphereGeometry(2.05, 48, 48),
  new THREE.MeshBasicMaterial({ color: 0x4ea0ff, transparent: true, opacity: 0.08 })
);
atmosphere.scale.set(1.02, 1.02, 1.02);
scene.add(atmosphere);

let lastTime = performance.now();
function animate(now = performance.now()) {
  const delta = (now - lastTime) / 1000;
  lastTime = now;

  globe.rotation.y += delta * 0.3;
  atmosphere.rotation.y += delta * 0.25;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function handleResize() {
  const { clientWidth, clientHeight } = container;
  camera.aspect = clientWidth / clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(clientWidth, clientHeight);
}

window.addEventListener('resize', handleResize);
handleResize();
animate();
