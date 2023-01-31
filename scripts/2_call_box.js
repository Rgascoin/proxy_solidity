const {ethers} = require("hardhat");

async function main() {
    const Box = await ethers.getContractFactory("Box");
    const box = await Box.attach("0xAB8558512680db7650c0C190aE6C738e188AC0CC");

    console.log((await box.retrieve()).toString());
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});