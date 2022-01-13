import { useMoralis } from 'react-moralis';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

function NotLoggedIn() {
    const { authenticate, isAuthenticated } = useMoralis();
    const router = useRouter();

    if(isAuthenticated) router.push('/account');
    
    return (
        <div className="w-screen">
      <div
      className="w-11/12 mx-auto mt-10 space-y-4 max-w-xl">
        <h1 className="font-bold text-2xl">Connect Your Wallet.</h1>
        <h2 className="text-gray-500 font-semibold">
          Connect with one of our available{" "}
          <span className="text-blue-500 relative whitespace-nowrap">wallet</span> providers or create a
          new one.
        </h2>
        <div 
        onClick={authenticate}
        className="border rounded-xl hover:shadow-lg hover:bg-gray-50">
            <div className="grid grid-cols-8 items-center py-3 cursor-pointer">
                <Image
                src="/opensea/login/metamask.png"
                height={30}
                width={30}
                objectFit="contain"
                />
                <h1 className="font-bold col-span-6">MetaMask</h1>
                <h2 className="text-xs text-gray-400 font-semibold">Popular</h2>
            </div>
        </div>
      </div>
    </div>
    )
}

export default NotLoggedIn
