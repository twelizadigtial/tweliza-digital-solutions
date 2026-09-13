"use client";

import React, { useRef, useEffect } from "react";

export function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let THREE: typeof import("three");

    import("three").then((threeModule) => {
      THREE = threeModule;

      const isMobile = window.innerWidth < 768;
      const isDarkMode = document.documentElement.classList.contains("dark");

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        canvas.clientWidth / canvas.clientHeight,
        0.1,
        1000
      );
      camera.position.z = isMobile ? 5.2 : 4.5;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: !isMobile,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
      renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

      // Abstract Torus Knot Mesh
      const geometry = new THREE.TorusKnotGeometry(
        1.2,
        0.35,
        isMobile ? 64 : 128,
        isMobile ? 16 : 32
      );
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x1d001d,
        emissive: 0xa832a8,
        emissiveIntensity: isDarkMode ? 0.6 : 0.45,
        roughness: 0.2,
        metalness: 0.85,
        wireframe: true,
      });

      const torusKnot = new THREE.Mesh(geometry, material);
      scene.add(torusKnot);

      // Particle Cloud Grid
      const particlesCount = isMobile ? 80 : 200;
      const positions = new Float32Array(particlesCount * 3);
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 12;
        positions[i + 1] = (Math.random() - 0.5) * 12;
        positions[i + 2] = (Math.random() - 0.5) * 8;
      }

      const particlesGeometry = new THREE.BufferGeometry();
      particlesGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particlesMaterial = new THREE.PointsMaterial({
        size: isMobile ? 0.045 : 0.035,
        color: isDarkMode ? 0xe6e8ec : 0x4b36e3,
        transparent: true,
        opacity: 0.85,
      });

      const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particleSystem);

      // Ambient Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xa832a8, 4, 50);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        mouseX = (e.clientX / innerWidth - 0.5) * 0.6;
        mouseY = (e.clientY / innerHeight - 0.5) * 0.6;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0];
          const { innerWidth, innerHeight } = window;
          mouseX = (touch.clientX / innerWidth - 0.5) * 0.5;
          mouseY = (touch.clientY / innerHeight - 0.5) * 0.5;
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });

      const handleResize = () => {
        if (!canvas) return;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height, false);
      };

      window.addEventListener("resize", handleResize);

      const animate = () => {
        torusKnot.rotation.x += 0.004;
        torusKnot.rotation.y += 0.006;

        torusKnot.rotation.x += (mouseY - torusKnot.rotation.x) * 0.03;
        torusKnot.rotation.y += (mouseX - torusKnot.rotation.y) * 0.03;

        particleSystem.rotation.y -= 0.001;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        geometry.dispose();
        material.dispose();
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        renderer.dispose();
      };
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-85 dark:opacity-60 -z-10"
    />
  );
}
