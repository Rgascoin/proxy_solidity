const {ethers, upgrades} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying ProxyLearn with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("ProxyLearnUUPS");

    console.log("Deploying ProxyLearnUUPS...");
    const contract = await upgrades.deployProxy(Contract, {kind: 'uups'});
    await contract.deployed();
    console.log(`Contract deployed to: ${contract.address}`);

    console.log("Minting NFT...");
    await contract.safeMint(deployer.address);
    console.log("Minting done.");
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});