require('dotenv').config(); //all the key value pairs are being made available due to this lib
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

// const GOERLI_TESTNET_PRIVATE_KEY = '';
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = 'XXXXXXXXX_ArbitrumOne_Private_key';


module.exports = {
  defaultNetwork: "arbitrumOne",
  networks: {
    hardhat: {
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY],
    },
    arbitrumGoerli: {
      url: 'https://goerli-rollup.arbitrum.io/rpc',
      chainId: 421613,
      //accounts: [GOERLI_TESTNET_PRIVATE_KEY]
    },
  },
  solidity: {
    version: "0.8.18",
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  etherscan: {
    apiKey: {
      arbitrumOne: 'AQ13WPUK52XY53VBUXYB47Z7WJCT2EUVC5'
    },
    sourcify: {
      // Disabled by default
      // Doesn't need an API key
      enabled: true
    }
  },
}