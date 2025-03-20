"use client";
import { ethers } from "ethers";
import LPabi from "../ABI/LPabi.json";
import Manager from "../ABI/Manager.json";
import Vaultabi from "../ABI/Vaultabi.json";

const RPC = "https://rpc.test.btcs.network/";

declare let window: {
  ethereum: ethers.providers.ExternalProvider;
};

export const MANAGER_ADDRESS = "0x0E22A7cDF47F8A3f574af08Ed7776229fF9b2367";
export const WBTC = "0xdb1D816f2eEc010F8aF79Ca0C59a63CceF1D27Ed";
export const USDT = "0x28F73576727325dB10eBA316f8C39F0571600c4C";

export const getVaultAddress = async (address: `0x${string}`) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const manager = new ethers.Contract(MANAGER_ADDRESS, Manager, provider);
  const vaultAddress = await manager.vaultOwners(address);
  return vaultAddress;
};

export interface VaultData {
  collateralAmount: number;
  maxLoanAmountWBTC: number;
  maxLoanAmountUSDT: number;
  creditScore: number;
  vaultAddress: string;
}

export const getVaultData = async (
  address: `0x${string}`
): Promise<VaultData> => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const manager = new ethers.Contract(MANAGER_ADDRESS, Manager, provider);
    const vaultAddress = await manager.vaultOwners(address);

    if (!vaultAddress || vaultAddress === ethers.constants.AddressZero) {
      throw new Error("No vault found for this address");
    }

    const vault = new ethers.Contract(vaultAddress, Vaultabi, provider);

    // Fetch all data in parallel for better performance
    const [collateral, maxLoanWBTC, maxLoanUSDT, creditScore] =
      await Promise.all([
        vault.collateralAmount(),
        vault.getMaxLoanAmount(WBTC),
        vault.getMaxLoanAmount(USDT),
        vault.creditScore(),
      ]);

    // Format and return the data
    return {
      collateralAmount: Number(collateral) / 1e18,
      maxLoanAmountWBTC: Number(maxLoanWBTC) / 1e18,
      maxLoanAmountUSDT: Number(maxLoanUSDT) / 1e18,
      creditScore: Number(creditScore),
      vaultAddress: vaultAddress,
    };
  } catch (error) {
    console.error("Error fetching vault data:", error);
    throw error;
  }
};

// Optional: Simplified version that doesn't need a user address if you already have the vault address
export const getVaultDataByVaultAddress = async (
  vaultAddress: string
): Promise<VaultData> => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const vault = new ethers.Contract(vaultAddress, Vaultabi, provider);

    const [collateral, maxLoanWBTC, maxLoanUSDT, creditScore] =
      await Promise.all([
        vault.collateralAmount(),
        vault.getMaxLoanAmount(WBTC),
        vault.getMaxLoanAmount(USDT),
        vault.creditScore(),
      ]);

    return {
      collateralAmount: Number(collateral) / 1e18,
      maxLoanAmountWBTC: Number(maxLoanWBTC) / 1e18,
      maxLoanAmountUSDT: Number(maxLoanUSDT) / 1e18,
      creditScore: Number(creditScore),
      vaultAddress: vaultAddress,
    };
  } catch (error) {
    console.error("Error fetching vault data:", error);
    throw error;
  }
};
