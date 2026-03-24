import { ethers } from 'ethers';

export async function connectWallet() {
if (typeof window.ethereum !== 'undefined') {
const provider = new ethers.BrowserProvider(window.ethereum);
const accounts = await provider.send('eth_requestAccounts', []);
return accounts[0];
} else {
alert('MetaMask not detected');
}
}
