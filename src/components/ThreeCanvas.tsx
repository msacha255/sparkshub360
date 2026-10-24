"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Zap, RotateCw, ZoomIn, ZoomOut, Eye, Cpu, Compass } from "lucide-react";

export type ModelType = "rover" | "circuit" | "atom";

interface ThreeCanvasProps {
  onInteract?: (info: string) => void;
  lang?: "en" | "sw";
}

export default function ThreeCanvas({ onInteract, lang = "en" }: ThreeCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeModel, setActiveModel] = useState<ModelType>("rover");
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>("Main Sensor Array");

  // Keep references for animation loop
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Mouse interaction state
  const isDraggingRef = useRef<boolean>(false);
  const prevMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotVelocityRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 2, 7.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 2. Renderer with Antialias & Alpha
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // 3. Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xff8800, 2.5);
    dirLight1.position.set(5, 8, 5);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x0088ff, 2.2);
    dirLight2.position.set(-6, 3, -3);
    scene.add(dirLight2);

    const dirLight3 = new THREE.DirectionalLight(0x00ff88, 1.2);
    dirLight3.position.set(0, -5, 4);
    scene.add(dirLight3);

    // 4. Model Group
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);
    modelGroupRef.current = modelGroup;

    // 5. Floating Particle Sparkles
    const particleCount = 180;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color("#FF6600"), // Orange
      new THREE.Color("#0070F3"), // Blue
      new THREE.Color("#10B981"), // Emerald
      new THREE.Color("#F59E0B"), // Amber
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Build the initial 3D object
    buildModel(activeModel, modelGroup);

    // 6. Animation loop
    const startTime = performance.now();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Auto rotation if enabled
      if (isRotating && modelGroupRef.current) {
        modelGroupRef.current.rotation.y += 0.008;
      }

      // Smooth inertia damping when dragged
      if (modelGroupRef.current && !isDraggingRef.current) {
        modelGroupRef.current.rotation.y += rotVelocityRef.current.x * 0.92;
        modelGroupRef.current.rotation.x += rotVelocityRef.current.y * 0.92;
        rotVelocityRef.current.x *= 0.92;
        rotVelocityRef.current.y *= 0.92;
      }

      // Gentle floating bob
      if (modelGroupRef.current) {
        modelGroupRef.current.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
      }

      // Dynamic model internal animations
      if (activeModel === "rover" && modelGroupRef.current) {
        const radar = modelGroupRef.current.getObjectByName("radarHead");
        if (radar) {
          radar.rotation.y = Math.sin(elapsedTime * 2.5) * 0.8;
        }
        const wheels = modelGroupRef.current.getObjectByName("wheelsGroup");
        if (wheels) {
          wheels.children.forEach((w) => {
            w.rotation.x += 0.03;
          });
        }
      } else if (activeModel === "circuit" && modelGroupRef.current) {
        const ring1 = modelGroupRef.current.getObjectByName("ring1");
        const ring2 = modelGroupRef.current.getObjectByName("ring2");
        const core = modelGroupRef.current.getObjectByName("coreGlow");
        if (ring1) ring1.rotation.z += 0.015;
        if (ring2) ring2.rotation.x -= 0.02;
        if (core) {
          const scale = 1 + Math.sin(elapsedTime * 4) * 0.08;
          core.scale.set(scale, scale, scale);
        }
      } else if (activeModel === "atom" && modelGroupRef.current) {
        const orbital1 = modelGroupRef.current.getObjectByName("orbital1");
        const orbital2 = modelGroupRef.current.getObjectByName("orbital2");
        const orbital3 = modelGroupRef.current.getObjectByName("orbital3");
        if (orbital1) orbital1.rotation.y += 0.025;
        if (orbital2) orbital2.rotation.x += 0.03;
        if (orbital3) orbital3.rotation.z += 0.02;
      }

      // Particle gentle sway
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsedTime * 0.02;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize handling
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 480;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [activeModel, isRotating]);

  // Model builder function
  const buildModel = (type: ModelType, group: THREE.Group) => {
    // Clear previous children
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
    }

    if (type === "rover") {
      // SMART ROVER (Robotics & Engineering Lab)
      // Chassis
      const chassisGeo = new THREE.BoxGeometry(2.6, 0.9, 1.8);
      const chassisMat = new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.6,
        roughness: 0.25,
      });
      const chassis = new THREE.Mesh(chassisGeo, chassisMat);
      chassis.castShadow = true;
      group.add(chassis);

      // Top Deck with Brand Accent stripes
      const topDeckGeo = new THREE.BoxGeometry(2.4, 0.2, 1.6);
      const topDeckMat = new THREE.MeshStandardMaterial({
        color: 0xff6600, // Sparks Orange
        metalness: 0.4,
        roughness: 0.3,
      });
      const topDeck = new THREE.Mesh(topDeckGeo, topDeckMat);
      topDeck.position.y = 0.55;
      group.add(topDeck);

      // Electronic Circuit Board / Breadboard
      const circuitGeo = new THREE.BoxGeometry(1.6, 0.1, 1.2);
      const circuitMat = new THREE.MeshStandardMaterial({
        color: 0x059669, // Emerald Green
        metalness: 0.2,
        roughness: 0.5,
      });
      const circuit = new THREE.Mesh(circuitGeo, circuitMat);
      circuit.position.y = 0.68;
      group.add(circuit);

      // Microcontroller chip
      const chipGeo = new THREE.BoxGeometry(0.5, 0.12, 0.5);
      const chipMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        metalness: 0.8,
        roughness: 0.2,
      });
      const chip = new THREE.Mesh(chipGeo, chipMat);
      chip.position.set(0, 0.76, 0);
      group.add(chip);

      // Radar Turret & Ultrasonic Eyes
      const radarHead = new THREE.Group();
      radarHead.name = "radarHead";
      radarHead.position.set(0.9, 1.1, 0);

      const mastGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.7);
      const mastMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
      const mast = new THREE.Mesh(mastGeo, mastMat);
      radarHead.add(mast);

      const eyeBarGeo = new THREE.BoxGeometry(0.3, 0.4, 0.9);
      const eyeBarMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.7 });
      const eyeBar = new THREE.Mesh(eyeBarGeo, eyeBarMat);
      eyeBar.position.y = 0.4;
      radarHead.add(eyeBar);

      // Glowing Eyes (Ultrasonic sensor look)
      const eyeGeo = new THREE.CylinderGeometry(0.14, 0.14, 0.15, 16);
      const eyeMat = new THREE.MeshStandardMaterial({
        color: 0x00e5ff,
        emissive: 0x00b4d8,
        emissiveIntensity: 1.5,
      });
      const eye1 = new THREE.Mesh(eyeGeo, eyeMat);
      eye1.rotation.z = Math.PI / 2;
      eye1.position.set(0.15, 0.4, 0.24);
      radarHead.add(eye1);

      const eye2 = new THREE.Mesh(eyeGeo, eyeMat);
      eye2.rotation.z = Math.PI / 2;
      eye2.position.set(0.15, 0.4, -0.24);
      radarHead.add(eye2);

      group.add(radarHead);

      // Solar Wing / Battery Bank
      const solarGeo = new THREE.BoxGeometry(1.2, 0.05, 0.8);
      const solarMat = new THREE.MeshStandardMaterial({
        color: 0x0052cc,
        metalness: 0.7,
        roughness: 0.1,
      });
      const solar = new THREE.Mesh(solarGeo, solarMat);
      solar.position.set(-0.7, 0.75, 0);
      solar.rotation.z = -0.15;
      group.add(solar);

      // 4 High-Traction Wheels
      const wheelsGroup = new THREE.Group();
      wheelsGroup.name = "wheelsGroup";

      const wheelGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.35, 24);
      const wheelMat = new THREE.MeshStandardMaterial({
        color: 0x0f172a,
        roughness: 0.8,
        metalness: 0.2,
      });
      const rimMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b, // Yellow rims like the real flyer!
        metalness: 0.5,
        roughness: 0.3,
      });

      const wheelOffsets = [
        { x: 0.85, z: 1.1 },
        { x: -0.85, z: 1.1 },
        { x: 0.85, z: -1.1 },
        { x: -0.85, z: -1.1 },
      ];

      wheelOffsets.forEach((pos) => {
        const singleWheel = new THREE.Group();
        singleWheel.position.set(pos.x, -0.4, pos.z);

        const tire = new THREE.Mesh(wheelGeo, wheelMat);
        tire.rotation.x = Math.PI / 2;
        singleWheel.add(tire);

        const rim = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.37, 16), rimMat);
        rim.rotation.x = Math.PI / 2;
        singleWheel.add(rim);

        wheelsGroup.add(singleWheel);
      });

      group.add(wheelsGroup);
    } else if (type === "circuit") {
      // HOLOGRAPHIC AI & CIRCUIT CORE
      const coreGeo = new THREE.IcosahedronGeometry(1.1, 2);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xff6600,
        emissive: 0xff3300,
        emissiveIntensity: 1.2,
        roughness: 0.2,
        metalness: 0.8,
        wireframe: false,
      });
      const coreGlow = new THREE.Mesh(coreGeo, coreMat);
      coreGlow.name = "coreGlow";
      group.add(coreGlow);

      // Wireframe cage
      const cageGeo = new THREE.IcosahedronGeometry(1.2, 1);
      const cageMat = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const cage = new THREE.Mesh(cageGeo, cageMat);
      group.add(cage);

      // Rotating Orbital Rings
      const ring1Geo = new THREE.TorusGeometry(1.8, 0.06, 16, 100);
      const ring1Mat = new THREE.MeshStandardMaterial({
        color: 0x0070f3,
        emissive: 0x0051b3,
        emissiveIntensity: 0.8,
        metalness: 0.7,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.name = "ring1";
      ring1.rotation.x = Math.PI / 3;
      group.add(ring1);

      const ring2Geo = new THREE.TorusGeometry(2.2, 0.05, 16, 100);
      const ring2Mat = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        emissive: 0x059669,
        emissiveIntensity: 0.8,
        metalness: 0.8,
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.name = "ring2";
      ring2.rotation.y = Math.PI / 4;
      group.add(ring2);

      // Floating logic nodes
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const nodeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
        const nodeMat = new THREE.MeshStandardMaterial({
          color: 0xffb703,
          emissive: 0xf59e0b,
          emissiveIntensity: 0.5,
        });
        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(Math.cos(angle) * 1.8, Math.sin(angle * 2) * 0.4, Math.sin(angle) * 1.8);
        group.add(node);
      }
    } else if (type === "atom") {
      // STEAM ATOM & SCIENTIFIC DISCOVERY
      const nucleusGeo = new THREE.SphereGeometry(0.85, 32, 32);
      const nucleusMat = new THREE.MeshStandardMaterial({
        color: 0xff3b30,
        emissive: 0xff2d55,
        emissiveIntensity: 0.9,
        roughness: 0.2,
      });
      const nucleus = new THREE.Mesh(nucleusGeo, nucleusMat);
      group.add(nucleus);

      // Three Interlocking Electron Orbits
      const orbitGeo = new THREE.TorusGeometry(2.1, 0.04, 16, 120);

      const createOrbital = (color: number, rotX: number, rotY: number, name: string) => {
        const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8 });
        const ring = new THREE.Mesh(orbitGeo, mat);
        ring.name = name;
        ring.rotation.set(rotX, rotY, 0);

        // Electron Sphere
        const electronGeo = new THREE.SphereGeometry(0.2, 16, 16);
        const electronMat = new THREE.MeshStandardMaterial({
          color,
          emissive: color,
          emissiveIntensity: 1.2,
        });
        const electron = new THREE.Mesh(electronGeo, electronMat);
        electron.position.set(2.1, 0, 0);
        ring.add(electron);

        return ring;
      };

      const orbital1 = createOrbital(0x0070f3, Math.PI / 4, 0, "orbital1");
      const orbital2 = createOrbital(0x10b981, -Math.PI / 4, Math.PI / 3, "orbital2");
      const orbital3 = createOrbital(0xff6600, Math.PI / 2, -Math.PI / 6, "orbital3");

      group.add(orbital1);
      group.add(orbital2);
      group.add(orbital3);
    }
  };

  // Mouse & Touch interaction
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current) return;
    const deltaX = e.clientX - prevMousePosRef.current.x;
    const deltaY = e.clientY - prevMousePosRef.current.y;

    modelGroupRef.current.rotation.y += deltaX * 0.008;
    modelGroupRef.current.rotation.x += deltaY * 0.008;

    rotVelocityRef.current = { x: deltaX * 0.005, y: deltaY * 0.005 };
    prevMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !modelGroupRef.current || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - prevMousePosRef.current.x;
    const deltaY = e.touches[0].clientY - prevMousePosRef.current.y;

    modelGroupRef.current.rotation.y += deltaX * 0.01;
    modelGroupRef.current.rotation.x += deltaY * 0.01;

    rotVelocityRef.current = { x: deltaX * 0.005, y: deltaY * 0.005 };
    prevMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Zoom controls
  const handleZoom = (direction: "in" | "out") => {
    if (!cameraRef.current) return;
    const targetZ = direction === "in" ? Math.max(cameraRef.current.position.z - 1.2, 3.5) : Math.min(cameraRef.current.position.z + 1.2, 11);
    cameraRef.current.position.z = targetZ;
  };

  // Trigger burst of sparks
  const triggerSparkBurst = () => {
    if (!particlesRef.current) return;
    const geom = particlesRef.current.geometry;
    const pos = geom.attributes.position.array as Float32Array;
    for (let i = 0; i < pos.length; i += 3) {
      pos[i] = (Math.random() - 0.5) * 6;
      pos[i + 1] = (Math.random() - 0.5) * 5;
      pos[i + 2] = (Math.random() - 0.5) * 6;
    }
    geom.attributes.position.needsUpdate = true;
    if (onInteract) onInteract(`Sparks energy surge activated!`);
  };

  return (
    <div
      ref={containerRef}
      className="three-canvas-container"
      style={{
        position: "relative",
        width: "100%",
        height: "clamp(340px, 46vh, 480px)",
        borderRadius: "24px",
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 45%, #1E293B 0%, #0F172A 70%, #020617 100%)",
        boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.1)",
        userSelect: "none",
        touchAction: "pan-y",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          cursor: isDraggingRef.current ? "grabbing" : "grab",
        }}
      />

      {/* Top Floating Header & Model Switcher */}
      <div
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          right: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          pointerEvents: "none",
        }}
      >
        <div
          className="canvas-title-badge"
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(12px)",
            padding: "5px 12px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#FFFFFF",
            fontSize: "0.8rem",
            fontWeight: 600,
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              backgroundColor: "#10B981",
              boxShadow: "0 0 8px #10B981",
              display: "inline-block",
            }}
          />
          <span className="canvas-title-text">Interactive 3D STEAM Lab</span>
        </div>

        {/* Model Switcher Buttons */}
        <div
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            gap: "3px",
            background: "rgba(15, 23, 42, 0.8)",
            backdropFilter: "blur(12px)",
            padding: "3px",
            borderRadius: "30px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          }}
        >
          <button
            onClick={() => {
              setActiveModel("rover");
              setSelectedHotspot("Robotics Rover Chassis & Ultrasonic Eye");
            }}
            style={{
              padding: "5px 11px",
              borderRadius: "20px",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: activeModel === "rover" ? "#FFFFFF" : "#94A3B8",
              backgroundColor: activeModel === "rover" ? "#FF6600" : "transparent",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="10" rx="3"/>
              <circle cx="12" cy="5" r="2"/>
              <path d="M12 7v4"/>
              <circle cx="8" cy="16" r="1.5" fill="currentColor"/>
              <circle cx="16" cy="16" r="1.5" fill="currentColor"/>
            </svg>
            <span>{lang === "en" ? "Rover" : "Roboti"}</span>
          </button>
          <button
            onClick={() => {
              setActiveModel("circuit");
              setSelectedHotspot("Holographic AI & Circuit Core");
            }}
            style={{
              padding: "5px 11px",
              borderRadius: "20px",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: activeModel === "circuit" ? "#FFFFFF" : "#94A3B8",
              backgroundColor: activeModel === "circuit" ? "#0070F3" : "transparent",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>{lang === "en" ? "Circuit" : "Saketi"}</span>
          </button>
          <button
            onClick={() => {
              setActiveModel("atom");
              setSelectedHotspot("Science & STEAM Discovery Atom");
            }}
            style={{
              padding: "5px 11px",
              borderRadius: "20px",
              fontSize: "0.76rem",
              fontWeight: 700,
              color: activeModel === "atom" ? "#FFFFFF" : "#94A3B8",
              backgroundColor: activeModel === "atom" ? "#10B981" : "transparent",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/>
              <path d="M8.5 2h7"/>
              <path d="M7 16h10"/>
            </svg>
            <span>{lang === "en" ? "Science" : "Sayansi"}</span>
          </button>
        </div>
      </div>

      {/* Helpful Hint on hover */}
      <div
        className="canvas-rotation-hint"
        style={{
          position: "absolute",
          top: "54px",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          background: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(6px)",
          padding: "3px 10px",
          borderRadius: "16px",
          color: "rgba(255, 255, 255, 0.75)",
          fontSize: "0.7rem",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          whiteSpace: "nowrap",
        }}
      >
        <Compass size={11} />
        <span>
          {lang === "en"
            ? "Click & drag to rotate 360°"
            : "Bofya & zungusha 360°"}
        </span>
      </div>

      {/* Bottom Area: Info Card + Zoom/Rotate Controls (Responsive Grid / Row) */}
      <div
        style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          right: "12px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "10px",
          pointerEvents: "none",
        }}
      >
        {/* Interactive Hotspot Details Badge */}
        <div
          style={{
            pointerEvents: "auto",
            flex: 1,
            maxWidth: "340px",
            background: "rgba(15, 23, 42, 0.88)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            borderRadius: "16px",
            padding: "10px 14px",
            color: "#FFFFFF",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "2px" }}>
            <Eye size={13} color="#FF6600" />
            <span style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "#FF8533", fontWeight: 700, letterSpacing: "0.05em" }}>
              {lang === "en" ? "Inspect & Learn" : "Chunguza & Jifunze"}
            </span>
          </div>
          <p style={{ fontSize: "0.85rem", fontWeight: 800, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {activeModel === "rover" && (lang === "en" ? "Sparks 360° Explorer Robot" : "Roboti ya Sparks 360° Explorer")}
            {activeModel === "circuit" && (lang === "en" ? "Electronic Circuit & AI Core" : "Saketi za Umeme & AI")}
            {activeModel === "atom" && (lang === "en" ? "Atomic Science & Experiment" : "Majaribio ya Sayansi & 3D")}
          </p>
          <p
            className="canvas-desc-text"
            style={{ fontSize: "0.74rem", color: "#94A3B8", marginTop: "3px", lineHeight: "1.35", margin: "2px 0 0" }}
          >
            {activeModel === "rover" &&
              (lang === "en"
                ? "Robotics assembly, ultrasonic sensors & motor coding."
                : "Uundaji wa magari ya roboti, vitambuzi na mota.")}
            {activeModel === "circuit" &&
              (lang === "en"
                ? "Breadboards, LED circuits & microcontrollers."
                : "Mizunguko ya umeme, taa za LED na mikonotroli.")}
            {activeModel === "atom" &&
              (lang === "en"
                ? "Exciting chemistry, physics observation & 3D design."
                : "Majaribio ya kemia, fizikia na maumbo ya 3D.")}
          </p>
        </div>

        {/* Floating Canvas Controls (Rotate, Zoom, Burst) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            pointerEvents: "auto",
            flexShrink: 0,
          }}
        >
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            title={
              isRotating
                ? lang === "en"
                  ? "Pause Auto-Rotation"
                  : "Sitisha Mzunguko"
                : lang === "en"
                ? "Start Auto-Rotation"
                : "Anzisha Mzunguko"
            }
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: isRotating ? "rgba(255, 102, 0, 0.9)" : "rgba(15, 23, 42, 0.8)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
              transition: "all 0.2s ease",
            }}
          >
            <RotateCw size={14} />
          </button>

          <button
            onClick={() => handleZoom("in")}
            title={lang === "en" ? "Zoom In" : "Kuza"}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(15, 23, 42, 0.8)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          >
            <ZoomIn size={14} />
          </button>

          <button
            onClick={() => handleZoom("out")}
            title={lang === "en" ? "Zoom Out" : "Punguza"}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "rgba(15, 23, 42, 0.8)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            }}
          >
            <ZoomOut size={14} />
          </button>

          <button
            onClick={triggerSparkBurst}
            title={lang === "en" ? "Trigger Spark Energy!" : "Washa Cheche ya STEAM!"}
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF6600, #F59E0B)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "0 4px 14px rgba(255, 102, 0, 0.5)",
            }}
          >
            <Zap size={14} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 520px) {
          .canvas-title-text {
            display: none !important;
          }
          .canvas-rotation-hint {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
