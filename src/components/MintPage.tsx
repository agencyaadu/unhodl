"use client";
// src/app/page.tsx  (Assuming MintPage is your main page, if not adjust the path accordingly)

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button"; // Assuming you have "@/components/ui/button"
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import * as THREE from "three";
// Import the GLTFLoader properly
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useRouter } from "next/navigation"; // Import useRouter

// Define a proper type for the cardRef
interface CreditCardProps {
  isMinting: boolean;
}

// 3D Card Model Component
const CreditCard: React.FC<CreditCardProps> = ({ isMinting }) => {
  // Specify the type for the ref
  const cardRef = useRef<THREE.Object3D>(null);
  const model = useLoader(GLTFLoader, "/credit-card.glb"); // Make sure "/credit-card.glb" is in your public directory

  // Fixed the type issue with position
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
const BlurOverlay = () => {
  return (
    <mesh position={[0, 0, 2.5]}>
      <planeGeometry args={[30, 30]} />
      <meshBasicMaterial transparent={true} opacity={0.2} color="#ffffff" />
      {/* Adjusted blur to be more subtle */}
    </mesh>
  );
};

// Scene component that includes the card and blur effects
const Scene = ({ isMinting }: { isMinting: boolean }) => {
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

      {/* The 3D card model */}
      <CreditCard isMinting={isMinting} />

      {/* Apply blur overlay */}
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

// Main page component
const MintPage = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const router = useRouter(); // Use useRouter for navigation

  const handleConnectWallet = () => {
    setWalletConnected(true);
  };

  const handleMint = () => {
    if (!walletConnected) {
      alert("Please connect your wallet first");
      return;
    }

    setIsMinting(true);

    // Simulate minting process
    setTimeout(() => {
      setIsMinting(false);
      alert("Card minted successfully!");
    }, 3000);
  };

  const handleDashboard = async () => {
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
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"></div>

      {/* Header with wallet button */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
        <div className="text-gray-800 text-2xl font-bold">DirectDeposit</div>
        <Button
          onClick={handleConnectWallet}
          className={`rounded-full px-6 py-2 ${
            walletConnected
              ? "bg-green-500"
              : "bg-purple-500 text-white hover:bg-purple-600"
          }`}
        >
          {walletConnected ? "Wallet Connected" : "Connect Wallet"}
        </Button>
      </header>

      {/* 3D Canvas and Mint Content */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* 3D Card Section */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
          <div className="w-full h-full bg-gradient-to-br from-white to-blue-200">
            <Canvas shadows>
              <Scene isMinting={isMinting} />
            </Canvas>
          </div>

          {/* Blur overlay for preview effect */}
          <div className="absolute inset-0 backdrop-blur-sm bg-white bg-opacity-5"></div>
          {/* Softer blur effect */}

          {/* Mint Button centered in the 3D area */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={handleMint}
              disabled={isMinting}
              className="bg-purple-500 text-white hover:bg-purple-600 rounded-full px-12 py-6 text-xl font-bold"
            >
              {isMinting ? "Minting..." : "Mint Your Card"}
            </Button>
          </div>
        </div>

        {/* Right Text Content */}
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

            {/* New buttons added here */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleDashboard} // Directly pass the function reference
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Dashboard
              </button>

              <Button
                onClick={handlePayNow}
                className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3 text-lg font-semibold"
              >
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintPage;
