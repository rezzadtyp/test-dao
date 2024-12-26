import { ethers } from "hardhat";

export async function propose() {
  const governor = await ethers.getContract("GovernorContracts");
  const box = await ethers.getContract("Box");
  
}
