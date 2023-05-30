'use client';

import React, { useEffect, useState } from 'react';
import './App.css';

import { EverscaleStandaloneClient } from 'everscale-standalone-client';
import { VenomConnect } from 'venom-connect';
import { ProviderRpcClient, Address, Contract } from 'everscale-inpage-provider';
import { Token_Root } from './abi/TokenRoot';
import { Token_Wallet } from './abi/TokenWallet';



const initVenomConnect = async () => {
  return new VenomConnect({
    theme: 'dark',
    checkNetworkId: 1000,
    checkNetworkName: "Venom Devnet",
    providersOptions: {
      venomwallet: {
        walletWaysToConnect: [
          {
            package: ProviderRpcClient,
            packageOptions: {
              fallback: VenomConnect.getPromise('venomwallet', 'extension') || (() => Promise.reject()),
              forceUseFallback: true,
            },
            packageOptionsStandalone: {
                fallback: () =>
                  EverscaleStandaloneClient.create({
                    connection: {
                      id: 1010,
                      group: 'venom_testnet',
                      type: 'jrpc',
                      data: {
                        endpoint: 'https://jrpc-devnet.venom.foundation/rpc',
                      },
                    },
                  }),
                forceUseFallback: true,
              },
            id: 'extension',
            type: 'extension',
          },
        ]
      },
    },
  });
};


async function App() {


  const [VC, setVC] = useState<VenomConnect | undefined>();
  useEffect(() => {
    (async () => {
      const _vc = await initVenomConnect();
      setVC(_vc);
    })();
  }, []);

  useEffect(() => {
    // connect event handler
    const off = VC?.on('connect', onConnect);
    if (VC)
      (async () => await VC.checkAuth())();

    // just an empty callback, cuz we don't need it
    return () => {
      off?.();
    };
  }, [VC]);

  const login = async() => {
    if (!VC) return;
    await VC.connect();
  }

  const [addr, setAddr] = useState<string>();
  const [pubkey, setPubkey] = useState<string>();
  const [provider, setProvider] = useState<ProviderRpcClient | undefined>();
  const [isConnected, setIsConnected] = useState<boolean>();
  // This method allows us to gen a wallet address from inpage provider
  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.address.toString();
  };
  const getPubkey = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();
    return providerState?.permissions.accountInteraction?.publicKey;
  };

  // This handler will be called after venomConnect.login() action
  // connect method returns provider to interact with wallet, so we just store it in state
  const onConnect = async (provider: any) => {
    setProvider(provider);
    const venomWalletAddress = provider ? await getAddress(provider) : undefined;
    const publicKey = provider ? await getPubkey(provider) : undefined;
    setAddr(venomWalletAddress);
    setPubkey(publicKey);
    setIsConnected(true);
  };
  // This handler will be called after venomConnect.disconnect() action
  // By click logout. We need to reset address and balance.
  const onDisconnect = async () => {
    await provider?.disconnect();
    setAddr(undefined);
    setPubkey(undefined);
    setIsConnected(false);
  };




  if (provider) {
    const userAddress = new Address('0:a88d39840c57b3a91e95012498cdc24fad4629fdb1e2bef3014f0763089b2ea7');
    const contractAddress = new Address('0:88fabbb54d7f73d7eb73b4fe2b982122ea9975cdbc6fb87c3c834f0e53a7f0c6');
    const recipientAddress = new Address('0:9f1672c53fe9d3fb49f90c529d53add0269b76aa4141775bc40ddaa3a66f33c6');
    const contract = new provider.Contract(Token_Wallet, contractAddress);
  
    const amount1 = toNano(0.1);
    const sendAmount = '10000';
  
    if (provider) {
      const userAddress = new Address('0:a88d39840c57b3a91e95012498cdc24fad4629fdb1e2bef3014f0763089b2ea7');
      const contractAddress = new Address('0:88fabbb54d7f73d7eb73b4fe2b982122ea9975cdbc6fb87c3c834f0e53a7f0c6');
      const recipientAddress = new Address('0:9f1672c53fe9d3fb49f90c529d53add0269b76aa4141775bc40ddaa3a66f33c6');
      const contract = new provider.Contract(Token_Wallet, contractAddress);
    
      const amount1 = toNano(0.1); // Assuming toNano returns a valid numeric value
      const sendAmount = '10000';
    
      const transfer = await contract?.methods
        .transfer({
          amount: sendAmount,
          recipient: recipientAddress,
          deployWalletValue: amount1,
          remainingGasTo: userAddress,
          notify: true,
          payload: '',
        })
        .send({
          from: userAddress,
          amount: { amount: amount1 }, // Provide a valid amount object
          bounce: true,
        });
    }
    
  

  const [walletAddress, setWalletAddress] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    //.preventDefault();
    // Perform form submission logic here
    // You can access the input values using walletAddress, tokenAddress, and amount
  };


  

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">Token Transfer</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="text-gray-700 font-bold mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              className="w-full border border-gray-300 p-2 rounded text-black focus:outline-none focus:border-blue-500"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tokenAddress" className="text-gray-700 font-bold mb-2">
              Token Address
            </label>
            <input
              type="text"
              id="tokenAddress"
              className="w-full border border-gray-300 text-black  p-2 rounded focus:outline-none focus:border-blue-500"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="text-gray-700 font-bold mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="w-full border border-gray-300 text-black p-2 rounded focus:outline-none focus:border-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
          
        </form>

        <div className="bg-blue-500 text-white py-2 px-4 rounded align-center justify-center hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
        {addr ?
          <button onClick={onDisconnect}>Disconnect</button>
          
          :
          <button onClick={login}>Connect Wallet</button>
        }
        </div>
      </div>
    </div>
  );
}

export default App;

