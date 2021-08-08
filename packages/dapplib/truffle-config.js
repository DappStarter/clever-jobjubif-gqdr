require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet release rural essence install battle flower genuine'; 
let testAccounts = [
"0x77e91c3254dec5e63dc1c1506abb19705e9fca1e8d466e3b11672fa7c05ba5c4",
"0xbc46a4ba862ba53f0150206506fc9032741c729d23a687f940d5c3a96754065e",
"0x37a315cfce21ad5144360f9e359c51cc5f67c361fff76743cbfcc6c65cc374ae",
"0x7a4a0321a58b46f8d0ba88eef1c1ab4ac45d0ff90ff29f53539862d9d4f2bf77",
"0x431b1420bdb2dd5e99dc62338bbc0bb0cae7e9f3eb1b23681a2b49aabb8e6bf2",
"0xd382d1838ba59b161c832fa63b030fcb8055094333d2bda8bda02607202f4083",
"0xce0e6a2803bea36ee47473ad3b712508bb25d67d6292f4affcb4b6da5f66e679",
"0xbe2cdc60efdde6f71f13858d30f3791e7f4e0108dbf160885f5edf85085f1a3a",
"0xf52bc911023ac6e0edb25ebe2dccb0cfe7b458a8a53fe6f35329fcf0a621687f",
"0xdf32959c87c2e4db0b55c3d7be1e2c62c812c53d376ed7d3e37431bb1f7cdd6b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

