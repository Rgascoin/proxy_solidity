require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("hardhat-gas-reporter");

require("dotenv").config();
const DEV_PRIVATE_KEY = process.env.PRIVATE_KEY;
const DEV_ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.3",
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${DEV_ALCHEMY_API_KEY}`,
      accounts: [`${DEV_PRIVATE_KEY}`]
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'EUR',
  }
};
