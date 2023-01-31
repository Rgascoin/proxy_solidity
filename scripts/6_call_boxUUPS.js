const {ethers} = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("BoxUUPS");
    const box = await Box.attach("0x0186aa3794F35fe24EC9aA2f90b3F9D873E86FeD");

    console.log((await box.hello()).toString());
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});