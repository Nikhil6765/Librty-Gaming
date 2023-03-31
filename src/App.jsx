import React, { useState } from 'react';
import './App.css';
import { LibrtyDevKit, NETWORK } from 'librty-dev-kit';

function App() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    try {
      const ldk = new LibrtyDevKit('LDKhack', NETWORK.POLYGON, false, {
        rpc: window.ethereum,
      });
      const connection = ldk.wallet.metamask;
      await connection.connect();
      console.log(await connection.getChainId());
      setConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleConnectWallet = async () => {
    await connectWallet();
  };

  return (
    <div className="App">
      {connected ? (
        <button>Wallet connected!</button>
      ) : (
        <button onClick={handleConnectWallet}>Connect Wallet</button>
      )}
    </div>
  );
}

export default App;
