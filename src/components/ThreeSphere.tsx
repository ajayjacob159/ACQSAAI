import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSphereProps {
  isPlaying: boolean;
}

export const ThreeSphere: React.FC<ThreeSphereProps> = ({ isPlaying }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Particle Geometry
    const particleCount = 2800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color('#00C2B3'); // Vibrant Medical Aqua
    const color2 = new THREE.Color('#0077FF'); // Intelligent Blue
    const color3 = new THREE.Color('#7C3AED'); // Deep Violet

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 1.35 + (Math.random() - 0.5) * 0.08;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      // Color gradient
      const mix = Math.random();
      let c = new THREE.Color();
      if (mix < 0.5) {
        c.lerpColors(color1, color2, mix * 2);
      } else {
        c.lerpColors(color2, color3, (mix - 0.5) * 2);
      }

      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Particle Material with circular texture
    const canvasPoint = document.createElement('canvas');
    canvasPoint.width = 16;
    canvasPoint.height = 16;
    const ctx = canvasPoint.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(0,194,179,1)');
      grad.addColorStop(0.5, 'rgba(0,119,255,0.8)');
      grad.addColorStop(1, 'rgba(124,58,237,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvasPoint);

    const material = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      map: texture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Inner glowing core mesh
    const coreGeom = new THREE.IcosahedronGeometry(1.2, 3);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00C2B3,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    scene.add(coreMesh);

    // 3. Mouse Move Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 4. Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera/object tilt towards mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particles.rotation.y = elapsedTime * 0.15 + targetX * 0.3;
      particles.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1 - targetY * 0.3;

      coreMesh.rotation.y = -elapsedTime * 0.1;
      coreMesh.rotation.z = Math.cos(elapsedTime * 0.15) * 0.2;

      // Deform sphere vertices procedurally when playing audio
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      const amp = isPlaying ? 0.08 : 0.02;

      for (let i = 0; i < particleCount; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];

        const dist = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const wave = Math.sin(elapsedTime * 4 + ox * 3 + oy * 2) * amp;

        const factor = (dist + wave) / dist;
        posArray[i * 3] = ox * factor;
        posArray[i * 3 + 1] = oy * factor;
        posArray[i * 3 + 2] = oz * factor;
      }

      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeom.dispose();
      coreMat.dispose();
    };
  }, [isPlaying]);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] sm:min-h-[420px] relative pointer-events-none" 
    />
  );
};
