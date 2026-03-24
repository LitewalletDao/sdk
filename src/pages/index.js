import Navbar from '../components/Navbar';
import WalletCard from '../components/WalletCard';

export default function Home() {
return ( <div> <Navbar />
<main style={{ padding: '20px' }}> <h1>Litewallet Dashboard</h1> <WalletCard /> </main> </div>
);
}
