const {ethers, upgrades} = require("hardhat");

async function main() {
    const box_proxy = "0x0186aa3794F35fe24EC9aA2f90b3F9D873E86FeD";

    const [deployer] = await ethers.getSigners();
    console.log("Deploying Box with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const BoxV2UUPS = await ethers.getContractFactory("BoxV2UUPS");

    console.log("Deploying Box...");
    const boxV2UUPS = await upgrades.upgradeProxy(box_proxy, BoxV2UUPS);
    console.log(`Box deployed to: ${boxV2UUPS.address}`);
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});