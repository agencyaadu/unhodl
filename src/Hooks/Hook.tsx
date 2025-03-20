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

    return vaultAddress;
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

export const MANAGER_ADDRESS = "0x0E22A7cDF47F8A3f574af08Ed7776229fF9b2367"
export const WBTC = "0xdb1D816f2eEc010F8aF79Ca0C59a63CceF1D27Ed"
export const USDT = "0x28F73576727325dB10eBA316f8C39F0571600c4C"
