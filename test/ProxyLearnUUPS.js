const { expect } = require('chai');
const { ethers, upgrades} = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe('ProxyLearn', function () {
    async function deployFixture() {
        const signers = await ethers.getSigners();

        Contract = await ethers.getContractFactory("ProxyLearnUUPS");
        contract = await upgrades.deployProxy(Contract, {kind: 'uups'});
        await contract.deployed();

        return {Contract, contract, signers}
    }

    // Test case
    it('mint an NFT and retrieve it', async function () {
        const { contract, signers } = await loadFixture(deployFixture);

        await contract.safeMint(signers[0].address);
        expect((await contract.balanceOf(signers[0].address)).toString()).to.equal('1');
    });

    it('retrieve the contract version', async function () {
        const { contract, signers } = await loadFixture(deployFixture);

        expect((await contract.getVersion()).toString()).to.equal('1');
    });
});