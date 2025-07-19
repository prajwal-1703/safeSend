import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, createConfig, WagmiProvider, useConnect, useAccount, useBalance, useSendTransaction } from 'wagmi'
import { sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import "./App.css"
import { sendTransaction } from 'viem/actions';

const queryClient = new QueryClient()
const projectId = '<WalletConnect projectId>';

export const config = createConfig({
  chains: [sepolia],
  connectors: [
    injected(),

  ],
  transports: {
    [sepolia.id]: http(),
  },
})

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <h1>Ethereum Wallet</h1>
          <p>Connect your wallet to interact with the Ethereum network.</p>
          <WalletConnector />
          <EthSend />
          <MyAddress />

        </div>
      </QueryClientProvider>
    </WagmiProvider>

  );
}

function WalletConnector() {
  const { connectors, connect } = useConnect();
  return connectors.map((connector) => (
    <div className='wallet-connector' key={connector.uid}>
      <button key={connector.uid} onClick={() => connect({ connector })}>
        {connector.name}
      </button>
    </div>
  ));
}

function MyAddress() {
  const { address } = useAccount();
  const { data: balance } = useBalance({ address });
  return (
    <div className="my-address">
      <h1>My Address</h1>
      <div>{address}</div>
      <div>Balance: {balance ? `${balance.formatted} ${balance.symbol}` : 'Loading...'}</div>
    </div>
  );
}


function EthSend() {
  const [to, setTo] = React.useState('');
  const { sendTransaction, data: hash, isLoading, isSuccess, error } = useSendTransaction();

  function sendEth() {
    sendTransaction({
      to,
      value: BigInt('100000000000000000'), // 0.1 ETH in wei
    });
  }

  return (
    <div className='eth-send'>
      <input
        type="text"
        placeholder="Address"
        value={to}
        onChange={e => setTo(e.target.value)}
      />
      <button onClick={sendEth} disabled={isLoading || !to}>
        Send 0.1 Eth
      </button>
      {isSuccess && <div>Transaction sent! Hash: {hash}</div>}
      {error && <div>Error: {error.message}</div>}
    </div>
  );
}

export default App;
