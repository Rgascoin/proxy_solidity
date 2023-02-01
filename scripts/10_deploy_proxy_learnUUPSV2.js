const {ethers, upgrades} = require("hardhat");

async function main() {
    const nft_proxy = "0x7dba78f2086842ce7ceacbca7990ed92e5bbe2c5";

    const [deployer] = await ethers.getSigners();
    console.log("Deploying ProxyLearn with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Contract = await ethers.getContractFactory("ProxyLearnUUPSV2");

    console.log("Deploying ProxyLearnUUPSV2...");
    const contract = await upgrades.upgradeProxy(nft_proxy, Contract);
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