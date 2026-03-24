import { useState } from 'react';
import { connectWallet } from '../services/wallet';

export default function WalletCard() {
const [address, setAddress] = useState('');

const handleConnect = async () => {
const addr = await connectWallet();
setAddress(addr);
};

return (
<div style={{ marginTop: '20px' }}> <button onClick={handleConnect}>Connect Wallet</button>
{address && <p>Connected: {address}</p>} </div>
);
}
