"use client"

import { ethers } from "ethers";
import LPabi from  "../ABI/LPabi.json"
import Manager from "../ABI/Manager.json"
import Vaultabi from "../ABI/Vaultabi.json"
const RPC =  "https://rpc.test.btcs.network/";

declare let window : {
    ethereum: ethers.providers.ExternalProvider;
}


export const getVaultAddress = async (address:`0x${string}`) => {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const manager = new ethers.Contract(MANAGER_ADDRESS, Manager, provider);
    const vaultAddress = await manager.vaultOwners(address);    

    console.log(vaultAddress);
    console.log(provider);
       
}

export const collateral = async (address:`0x${string}`) => {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const manager = new ethers.Contract(MANAGER_ADDRESS, Manager, provider);
    const vaultaddress = await manager.vaultOwners(address); 
    const vault = new ethers.Contract(vaultaddress, Vaultabi, provider);

    const collateral = await vault.collateralAmount();

    const getMaxLoanAmount = await vault.getMaxLoanAmount(WBTC);
    const getMaxLoanAmount2 = await vault.getMaxLoanAmount(USDT);
    const creditscore = await vault.creditScore();

    console.log("creditscore",Number(creditscore));
    console.log("USDT",Number(getMaxLoanAmount2)/1e18);

    console.log("WBTC",Number(getMaxLoanAmount)/1e18);
    console.log(Number(collateral)/1e18);
    
    

    // console.log(Number(collateral));
    

} 

export const MANAGER_ADDRESS = "0x24Edf72C88d8cc616689E23d007465C00d084948"
export const WBTC = "0x7FcC2D0D420B057C811e976800057d470d15A6B0"
export const USDT = "0xdA8C717ed176FaA6FE89b04877917727F9A24392"
