import { ethers } from "hardhat";
import { config } from "dotenv";

const main = async () => {
  const isLocal = false;

  if (isLocal) {
    console.log("run local");
  } else {
    console.log("run shibuya");
    const rpcEndpoint = "https://evm.shibuya.astar.network/";
    const deploySetting = config().parsed;
    console.log(deploySetting);
    const provider = new ethers.JsonRpcProvider(rpcEndpoint);
    const signer = new ethers.Wallet(
      deploySetting?.DEV_PRIVATE_KEY ?? "",
      provider
    );

    const hello = await ethers.getContractFactory("Hello", signer);

    const result = await hello.deploy();
    await result.waitForDeployment();
    console.log("Hello Test: ", result);
    console.log("=== Hello Contract Address\n", (await result.getAddress()), "\n===");

    
    const deployer = await ethers.getSigner(signer.address);
    const token = await ethers.getContractFactory("Token", signer);
    const tokenResult = await token.deploy();
    await tokenResult.waitForDeployment();
    console.log("result: ", tokenResult);

    console.log("=== Token address\n", (await tokenResult.getAddress()), "\n===");
    //console.log("Account Balance: ", (await deployer));

  }

};
​
main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
​
// contract-address : 0xB8fCc697F88E0F15CEcE9Bae836062Db67a87883
`
  = results =
  <ref *1> Contract {
    interface: Interface {
      fragments: [ [FunctionFragment] ],
      _abiCoder: AbiCoder { coerceFunc: null },
      functions: { 'greet()': [FunctionFragment] },
      errors: {},
      events: {},
      structs: {},
      deploy: ConstructorFragment {
        name: null,
        type: 'constructor',
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        gas: null,
        _isFragment: true
      },
      _isInterface: true
    },
    provider: JsonRpcProvider {
      _isProvider: true,
      _events: [],
      _emitted: {
        block: 4017209,
        't:0x1e6b50576d6c7fc7b09e5dcf9e0c58a8bd9a0c96a85a0bee5db230d902245e80': 4017209
      },
      disableCcipRead: false,
      formatter: Formatter { formats: [Object] },
      anyNetwork: false,
      _networkPromise: Promise { [Object] },
      _maxInternalBlockNumber: 4017209,
      _lastBlockNumber: 4017209,
      _maxFilterBlockRange: 10,
      _pollingInterval: 4000,
      _fastQueryDate: 1686886689411,
      connection: { url: 'https://evm.shibuya.astar.network/' },
      _nextId: 77,
      _eventLoopCache: { detectNetwork: null, eth_chainId: null, eth_blockNumber: null },
      _network: { chainId: 81, name: 'unknown' },
      _internalBlockNumber: Promise { [Object] },
      _fastBlockNumber: 4017209,
      _fastBlockNumberPromise: Promise { 4017209 },
      _poller: null,
      _bootstrapPoll: null
    },
    signer: Wallet {
      _isSigner: true,
      _signingKey: [Function (anonymous)],
      _mnemonic: [Function (anonymous)],
      address: '0x291cB09220f1b05710AE368c247864BA3497Ff2c',
      provider: JsonRpcProvider {
        _isProvider: true,
        _events: [],
        _emitted: [Object],
        disableCcipRead: false,
        formatter: [Formatter],
        anyNetwork: false,
        _networkPromise: [Promise],
        _maxInternalBlockNumber: 4017209,
        _lastBlockNumber: 4017209,
        _maxFilterBlockRange: 10,
        _pollingInterval: 4000,
        _fastQueryDate: 1686886689411,
        connection: [Object],
        _nextId: 77,
        _eventLoopCache: [Object],
        _network: [Object],
        _internalBlockNumber: [Promise],
        _fastBlockNumber: 4017209,
        _fastBlockNumberPromise: [Promise],
        _poller: null,
        _bootstrapPoll: null
      }
    },
    callStatic: { 'greet()': [Function (anonymous)], greet: [Function (anonymous)] },
    estimateGas: { 'greet()': [Function (anonymous)], greet: [Function (anonymous)] },
    functions: { 'greet()': [Function (anonymous)], greet: [Function (anonymous)] },
    populateTransaction: { 'greet()': [Function (anonymous)], greet: [Function (anonymous)] },
    filters: {},
    _runningEvents: {},
    _wrappedEmits: {},
    address: '0xB8fCc697F88E0F15CEcE9Bae836062Db67a87883',
    resolvedAddress: Promise { '0xB8fCc697F88E0F15CEcE9Bae836062Db67a87883' },
    'greet()': [Function (anonymous)],
    greet: [Function (anonymous)],
    deployTransaction: {
      type: 2,
      chainId: 81,
      nonce: 0,
      maxPriorityFeePerGas: BigNumber { value: "1500000000" },
      maxFeePerGas: BigNumber { value: "3500000000" },
      gasPrice: null,
      gasLimit: BigNumber { value: "133338" },
      to: null,
      value: BigNumber { value: "0" },
      data: '0x608060405234801561001057600080fd5b50610173806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063cfae321714610030575b600080fd5b61003861004e565b604051610045919061011b565b60405180910390f35b60606040518060400160405280600d81526020017f48656c6c6f2c20776f726c642100000000000000000000000000000000000000815250905090565b600081519050919050565b600082825260208201905092915050565b60005b838110156100c55780820151818401526020810190506100aa565b60008484015250505050565b6000601f19601f8301169050919050565b60006100ed8261008b565b6100f78185610096565b93506101078185602086016100a7565b610110816100d1565b840191505092915050565b6000602082019050818103600083015261013581846100e2565b90509291505056fea26469706673582212203369ca1349f61751c6daf4bc4ff28301b1e5b21129b1d129d1c79814fa25000764736f6c63430008120033',
      accessList: [],
      hash: '0x1e6b50576d6c7fc7b09e5dcf9e0c58a8bd9a0c96a85a0bee5db230d902245e80',
      v: 1,
      r: '0xabe63232a2ca81a33a7deffd866725fac0159a9c6b6530937664a7e8a3ba924a',
      s: '0x173352b8c8a06fbe848e9894075292ba4ec39c63f5203b8a61d2841b8889da5d',
      from: '0x291cB09220f1b05710AE368c247864BA3497Ff2c',
      confirmations: 0,
      wait: [Function (anonymous)]
    },
    _deployedPromise: Promise { [Circular *1] }
  }
`;