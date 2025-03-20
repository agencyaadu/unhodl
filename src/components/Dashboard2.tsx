"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // Assuming you have "@/components/ui/button"
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation"; // Import the router hook

const Dashboard2 = () => {
  const [isMinting, setIsMinting] = useState(false);
  const router = useRouter(); // Use the router hook
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
    <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center p-8">
      <div className="max-w-xl text-center lg:text-left">
        <p className="text-gray-700 font-medium mb-4">THE FUTURE OF BANKING</p>
        <h1 className="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Mint Your Digital Card
        </h1>
        <p className="text-gray-800 text-xl mb-8">
          Secure. Instant. Borderless. Your Bitcoin-backed credit card is ready
          to be minted.
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

          <button
            onClick={handlePayNow}
            className="bg-green-500 text-white hover:bg-green-600 rounded-full px-8 py-3 text-lg font-semibold"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard2;
