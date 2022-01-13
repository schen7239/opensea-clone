import { useMoralis } from "react-moralis";
import { useRouter } from 'next/router';

function LoggedIn() {
  const { logout, user, isAuthenticated } = useMoralis();
  const router = useRouter();
  return (
    <div className="w-screen">
      <div className="w-full h-[225px] bg-gray-200 hover:bg-gray-300" />
      <div className="w-full -mt-20 mx-auto">
        <div className="bg-blue-400 rounded-full border-4 b-white h-[150px] w-[150px] z-50 hover:opacity-90 mx-auto" />
        <button onClick={() => {
          router.push('login'),
          logout()
        }}>Logout</button>
      </div>
    </div>
  );
}

export default LoggedIn;
