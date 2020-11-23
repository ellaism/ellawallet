'use strict';
var nodes = function() {}
nodes.customNode = require('./nodeHelpers/customNode');
nodes.infuraNode = require('./nodeHelpers/infura');
nodes.metamaskNode = require('./nodeHelpers/metamask');
nodes.nodeTypes = {
    ELLA: "ELLA",
    ELLATESTNET: "TESTNET ELLA",
    ETH: "ETH",
    ETC: "ETC",
    MUS: "MUSIC",
    Ropsten: "ROPSTEN ETH",
    Kovan: "KOVAN ETH",
    Rinkeby: "RINKEBY ETH",
    RSK: "RSK",
    EXP: "EXP",
    UBQ: "UBQ",
    Custom: "CUSTOM ETH"
};
nodes.ensNodeTypes = [nodes.nodeTypes.ETH, nodes.nodeTypes.Ropsten];
nodes.customNodeObj = {
    'name': 'CUS',
    'blockExplorerTX': '',
    'blockExplorerAddr': '',
    'type': nodes.nodeTypes.Custom,
    'eip155': false,
    'chainId': '',
    'tokenList': [],
    'abiList': [],
    'service': 'Custom',
    'lib': null
};
nodes.nodeList = {
  'ella': {
    'name': 'ELLA',
    'blockExplorerTX': 'https://explorer.ellaism.io/transaction/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.ellaism.io/address/[[address]]',
    'type': nodes.nodeTypes.ELLA,
    'eip155': true,
    'chainId': 64,
    'tokenList': require('./tokens/ellaTokens.json'),
    'abiList': require('./abiDefinitions/ellaAbi.json'),
    'service': 'ellaism.io',
    'lib': new nodes.customNode('https://jsonrpc.ellaism.io', '')
  },
  'ella-testnet': {
    'name': 'ELLA Testnet',
    'blockExplorerTX': 'https://explorer.testnet.ellaism.org/tx/[[txHash]]',
    'blockExplorerAddr': 'https://explorer.testnet.ellaism.org/addr/[[address]]',
    'type': nodes.nodeTypes.ELLATESTNET,
    'eip155': true,
    'chainId': 6464,
    'tokenList': require('./tokens/ellaTestnetTokens.json'),
    'abiList': require('./abiDefinitions/ellaTestnetAbi.json'),
    'service': 'testnet.ellaism.org',
    'lib': new nodes.customNode('https://jsonrpc.testnet.ellaism.org', '')
  }
};


nodes.ethPrice = require('./nodeHelpers/ethPrice');
module.exports = nodes;
