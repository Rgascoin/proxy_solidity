const { expect } = require('chai');
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('Box', function () {
    async function deployFixture() {
        Box = await ethers.getContractFactory("Box");
        box = await Box.deploy();
        await box.deployed();

        return {Box, box}
    }

    // Test case
    it('retrieve returns a value previously stored', async function () {
        const { box } = await loadFixture(deployFixture);

        // Store a value
        await box.store(42);

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await box.retrieve()).toString()).to.equal('42');
    });
});