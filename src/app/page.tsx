// app/page.tsx
"use client"
import { collateral } from "@/Hooks/Hook";
import HeroSection from "../components/herosection";



export default function Home() {

  // useEffect(()=>{
    collateral("0xAFE08919dAC82E79ae274eb94441AA2447Bb13b6");

    // console.log(window.ethereum);
    
  
  
  return (
    <main>
      <HeroSection />
      {/* Other sections would go here */}
    </main>
  );
}
