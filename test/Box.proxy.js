const { expect } = require('chai');
const { ethers, upgrades} = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('Box (proxy)', function () {
    async function deployFixture() {
        Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})

        return {Box, box}
    }

    it('retrieve returns a value previously initialized', async function () {
        const { box } = await loadFixture(deployFixture);

        expect((await box.retrieve()).toString()).to.equal('42');
    });
});