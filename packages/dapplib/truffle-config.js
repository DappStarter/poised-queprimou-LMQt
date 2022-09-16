require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kitten fresh skull drift reward stereo puppy include enter forward twin'; 
let testAccounts = [
"0xd77103d10d1baa9b9ecbeff956c52296714983efbea37e4d4d7eded1c7e7dd11",
"0x069bafb398588b8624d51906b63466b833c31746ee5e9687b820ba8ce37ef411",
"0x930bab300912c0980d64ba064618413a71adf40256db18922d288a68fd77b94d",
"0x93912b43b2ca6e89c405b4ef551e5c82bf899764806ad691212833d5c38103fb",
"0x6a28402cca960bf77718dc69217453b0eb7bf2d4fd87a10a2e65979a1bbf4f39",
"0x260428416c176fea05d26e5b466f36010eb6ab43b4d4f9278551db7565b05846",
"0xc47ce5aca4ca9126e270b0c0975e115d9a9745590d73d6994f2b15c1c25ebf2d",
"0x657a7a4d3ab02e82107fee62c78f793f52574a8be0d0efbc6f1d4d683aa83040",
"0x31b82659d2ce35e17e7ffcb7e8e75fe64f67bb86612846c820d91ec69df2b375",
"0x2b2a339a908cea8dbb2ca9af19b8ee4b38c1fcf21c36741c6b5b33e160d852dd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

