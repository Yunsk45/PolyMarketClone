const HDWalletProvider = require("@truffle/hdwallet-provider");
 require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
    matic: {
      provider: () => 
        new HDWalletProvider(
          process.env.PRIVATE_KEY,
          `https://rpc-mumbai.maticvigil.com/v1/${process.env.API_KEY}`,
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      chainId: 80001,
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./abis",
  compilers: {
    solc: {
      version: "^0.8.6",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  db: {
    enabled: false,
  },
};
