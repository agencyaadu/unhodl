"use client";

import React, { useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Html,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import { useRouter } from "next/navigation";

// Define proper types
interface CreditCardProps {
  isMinting: boolean;
  onMint: () => void;
}

// 3D Card Model Component with enhanced and debugged blur effect
const CreditCard: React.FC<CreditCardProps> = ({ isMinting, onMint }) => {
  const { scene } = useGLTF("/credit-card.glb");
  const cardRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (scene) {
      scene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          console.log("Node Material Type:", node.material.type); // Debug: Log material type

          // Create a new MeshStandardMaterial with strong blur properties
          const blurredMaterial = new THREE.MeshStandardMaterial({
            transparent: true,
            opacity: 0.5, // Even more transparent
            roughness: 1.0, // Max roughness for maximum diffuseness
            metalness: 0.0, // No metalness for a non-reflective look
            color: new THREE.Color("#dddddd"), // Light grey tint to enhance blur
            depthWrite: false, // Prevent depth sorting issues
          });

          node.material = blurredMaterial;
        }
      });
    }
  }, [scene]);

  useFrame(() => {
    if (cardRef.current) {
      cardRef.current.rotation.y += 0.003;
      if (isMinting) {
        cardRef.current.position.y = Math.sin(Date.now() * 0.003) * 0.1;
      }
    }
  });

  return (
    <group>
      <primitive ref={cardRef} object={scene} scale={5} position={[0, 0, 0]} />

      {/* HTML button overlay positioned on the card */}
      <Html position={[0, -1.5, 0.5]} center>
        <button
          onClick={onMint}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Mint
        </button>
      </Html>
    </group>
  );
};

// Fallback component when 3D fails
const FallbackCard: React.FC<CreditCardProps> = ({ onMint }) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        <div className="flex justify-between mb-8">
          <div className="text-xl font-bold text-blue-600">DirectDeposit</div>
          <div className="text-gray-500">Virtual Card</div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-40 rounded-lg mb-6 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-lg font-medium mb-2">Bitcoin-Backed</div>
            <div className="text-sm opacity-80">Credit Card</div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={onMint}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Mint Your Card
          </button>
        </div>
      </div>
    </div>
  );
};

// ErrorBoundary for Canvas to handle WebGL errors
class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Canvas error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Scene component with proper typing
interface SceneProps {
  isMinting: boolean;
  onMint: () => void;
}

const Scene: React.FC<SceneProps> = ({ isMinting, onMint }) => {
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

      {/* Credit card with mint button */}
      <CreditCard isMinting={isMinting} onMint={onMint} />

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

// Create a loading fallback
const LoadingFallback = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-700">Loading 3D environment...</p>
    </div>
  </div>
);

const Dashboard2: React.FC = () => {
  const [isMinting, setIsMinting] = useState<boolean>(false);
  const [canvasSupported, setCanvasSupported] = useState<boolean>(true);
  const router = useRouter();

  // Check if WebGL is supported on mount
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      if (!gl) {
        setCanvasSupported(false);
      }
    } catch (e) {
      setCanvasSupported(false);
    }
  }, []);

  // Handle button clicks using inline functions to avoid any binding issues
  const handleDashboard = () => {
    console.log("Navigating to dashboard");
    router.push("/dashboard");
  };

  const handlePayNow = () => {
    console.log("Processing payment");
  };

  // Handle mint button click
  const handleMint = () => {
    setIsMinting(true);
    console.log("Minting card...");

    // Reset minting status after animation completes
    setTimeout(() => {
      setIsMinting(false);
      console.log("Minting complete!");
    }, 3000);
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
        {/* 3D Card Section with Error Boundary and Suspense */}
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
          <div className="w-full h-full bg-gradient-to-br from-white to-blue-200">
            {canvasSupported ? (
              <CanvasErrorBoundary
                fallback={
                  <FallbackCard isMinting={isMinting} onMint={handleMint} />
                }
              >
                <Canvas
                  shadows
                  dpr={[1, 1.5]} // Reduced pixel ratio to prevent performance issues
                  gl={{
                    powerPreference: "default",
                    antialias: false, // Disable antialiasing to improve performance
                    alpha: true,
                    stencil: false,
                    depth: true,
                  }}
                >
                  <Suspense
                    fallback={
                      <Html center>
                        <LoadingFallback />
                      </Html>
                    }
                  >
                    <Scene isMinting={isMinting} onMint={handleMint} />
                  </Suspense>
                </Canvas>
              </CanvasErrorBoundary>
            ) : (
              <FallbackCard isMinting={isMinting} onMint={handleMint} />
            )}
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
