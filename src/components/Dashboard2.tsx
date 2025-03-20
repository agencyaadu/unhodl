"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useRouter } from "next/navigation";

// Define proper types
interface CreditCardProps {
  isMinting: boolean;
}

// 3D Card Model Component with proper typing
const CreditCard: React.FC<CreditCardProps> = ({ isMinting }) => {
  // Specify the correct type for the ref
  const cardRef = useRef<THREE.Object3D | null>(null);
  const model = useLoader(GLTFLoader, "/credit-card.glb");

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.003;
      if (isMinting) {
        cardRef.current.position.y = Math.sin(Date.now() * 0.003) * 0.1;
      }
    }
  });

  return (
    <primitive
      ref={cardRef}
      object={model.scene}
      scale={5}
      position={[0, 0, 0]}
    />
  );
};

// Blur overlay for the 3D model
const BlurOverlay: React.FC = () => {
  return (
    <mesh position={[0, 0, 2.5]}>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial transparent={true} opacity={0.2} color="#ffffff" />
    </mesh>
  );
};

// Scene component with proper typing
interface SceneProps {
  isMinting: boolean;
}

const Scene: React.FC<SceneProps> = ({ isMinting }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <CreditCard isMinting={isMinting} />
      <BlurOverlay />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      <Environment preset="city" />
    </>
  );
};

const Dashboard2: React.FC = () => {
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const router = useRouter();

  // Handle button clicks using inline functions to avoid any binding issues
  const handleDashboard = () => {
    alert("Dashboard button clicked!");
    console.log("Navigating to dashboard");
    router.push("/dashboard");
  };

  const handlePayNow = () => {
    alert("Pay Now button clicked!");
    console.log("Processing payment");
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-white via-blue-100 to-blue-300">
      {/* Background pattern */}
      <div className="fixed inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>

      {/* Header */}
      <header className="relative w-full p-6">
        <div className="text-gray-800 text-2xl font-bold">DirectDeposit</div>
      </header>

      {/* Main content container */}
      <div className="flex flex-col lg:flex-row w-full h-full pt-16">
        {/* 3D Card Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
          <div className="w-full h-full bg-gradient-to-br from-white to-blue-200">
            <Canvas shadows>
              <Scene isMinting={isMinting} />
            </Canvas>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-8">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-gray-700 font-medium mb-4">
              THE FUTURE OF BANKING
            </p>
            <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mint Your Digital Card
            </h1>
            <p className="text-gray-800 text-xl mb-8">
              Secure. Instant. Borderless. Your Bitcoin-backed credit card is
              ready to be minted.
            </p>
            <p className="text-gray-600 mb-8">
              One-click minting process. No hidden fees. Full ownership of your
              assets.
            </p>

            {/* Button container with z-index to ensure clickability */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-10">
              {/* Using direct HTML buttons to avoid any component-related issues */}
              <button
                type="button"
                onClick={handleDashboard}
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 py-3 text-lg font-semibold cursor-pointer"
              >
                Dashboard
              </button>
              <button
                type="button"
                onClick={handlePayNow}
                className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3 text-lg font-semibold cursor-pointer"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
