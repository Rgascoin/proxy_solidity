const { expect } = require('chai');
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('BoxV2', function () {
    async function deployFixture() {
        BoxV2 = await ethers.getContractFactory("BoxV2");
        boxV2 = await BoxV2.deploy();
        await boxV2.deployed();

        return {BoxV2, boxV2}
    }

    // Test case
    it('retrieve returns a value previously stored', async function () {
        const { boxV2 } = await loadFixture(deployFixture);

        // Store a value
        await boxV2.store(42);

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await boxV2.retrieve()).toString()).to.equal('42');
    });

    it('retrieve returns a value previously incremented', async function () {
        const { boxV2 } = await loadFixture(deployFixture);

        // Increment
        await boxV2.store(42);
        await boxV2.increment();

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await boxV2.retrieve()).toString()).to.equal('43');
    });
});