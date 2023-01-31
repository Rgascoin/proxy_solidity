const {ethers} = require("hardhat");

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const boxV2 = await BoxV2.attach("0xAB8558512680db7650c0C190aE6C738e188AC0CC");

    const tx = await boxV2.increment();
    await tx.wait();
    console.log((await boxV2.retrieve()).toString());
}

main().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});