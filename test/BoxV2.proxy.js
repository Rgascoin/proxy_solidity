const { expect } = require('chai');
const { ethers, upgrades} = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('BoxV2 (proxy)', function () {
    async function deployFixture() {
        Box = await ethers.getContractFactory("Box");
        BoxV2 = await ethers.getContractFactory("BoxV2");

        const box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
        const boxV2 = await upgrades.upgradeProxy(box.address, BoxV2);

        return {Box, BoxV2, box, boxV2}
    }

    it('Upgrade the contract and retrieve the same stored value', async function () {
        const { box, boxV2} = await loadFixture(deployFixture);

        expect((await box.retrieve()).toString()).to.equal((await boxV2.retrieve()).toString());
        expect(await box.address).to.equal(boxV2.address);
    });

    it('retrieve returns a value previously incremented', async function () {
        const { box, boxV2 } = await loadFixture(deployFixture);

        await boxV2.increment();

        expect((await box.retrieve()).toString()).to.equal('43');
    });
});