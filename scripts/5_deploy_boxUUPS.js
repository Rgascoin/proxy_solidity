const {ethers, upgrades} = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying Box with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const BoxUUPS = await ethers.getContractFactory("BoxUUPS");

    console.log("Deploying Box...");
    const boxUUPS = await upgrades.deployProxy(BoxUUPS, {initializer: 'initialize', kind: 'uups'});
    console.log(`Box deployed to: ${boxUUPS.address}`);
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});