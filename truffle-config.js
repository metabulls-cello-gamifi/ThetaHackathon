const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    testnet: {
      provider: () => {
 
        // Replace the private key below with the private key of the deployer wallet. 
        // Make sure the deployer wallet has a sufficient amount of TFuel, e.g. 100 TFuel 
        return new HDWalletProvider({
          privateKeys: ['608436cc724c5de3aab7f34591062784ed3bdc8e018c1aebbc17f7155340c3bb'],
          providerOrUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
        });
      },
      network_id: 365,
      gasPrice: 4000000000000,
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
        solc: {
            version: "0.8.6", // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {
                // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 1000000000,
                },
                //  evmVersion: "byzantium"
            },
        },
    },
};