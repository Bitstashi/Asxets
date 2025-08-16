async function main() {
  const [deployer] = await ethers.getSigners();
  const Token = await ethers.getContractFactory("RWAInfrastructureToken");
  const token = await Token.deploy();
  console.log("Deployed to:", token.address);
}
main().catch(console.error);
