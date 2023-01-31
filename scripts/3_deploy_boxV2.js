const {ethers, upgrades} = require("hardhat");

async function main() {
    const box_proxy = "0xAB8558512680db7650c0C190aE6C738e188AC0CC";

    const [deployer] = await ethers.getSigners();
    console.log("Deploying BoxV2 with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const BoxV2 = await ethers.getContractFactory("BoxV2");

    console.log("Deploying BoxV2...");
    const boxV2 = await upgrades.upgradeProxy(box_proxy, BoxV2);
    console.log(`Box deployed to: ${boxV2.address}`);
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});