import {SearchIcon, UserCircleIcon, ViewListIcon} from "@heroicons/react/solid";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useMoralis } from 'react-moralis';
function Header() {
    const [searchInput, setSearchInput] = useState('');
    const { isAuthenticated } = useMoralis();
    const router = useRouter();
    return (
        <header className="h-18 bg-white grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-4 px-6 space-x-8 border-b shadow-md z-50">
            <div className="relative flex items-center space-x-3 xl:flex-grow cursor-pointer" onClick={() => router.push('/')}>
                <img className="h-10" src="/opensea/header/Logomark-Blue.png"/>
                <h1 className="font-bold text-2xl">OpenSea</h1>
            </div>
            <div className="hidden md:flex items-center space-x-3 border px-3 rounded-xl col-span-2 focus-within:shadow-md cursor-pointer lg:col-span-3 xl:col-span-2">
            <SearchIcon className="h-5" />
            <input className="flex-grow pl-5 bg-transparent outline-none" type="text" value={searchInput} onChange = {(e)=>setSearchInput(e.target.value)} placeholder="Search items, collections, and accounts" />
            </div>            
            <div className="hidden lg:flex items-center lg:space-x-10 justify-end lg:justify-between">
                <div className="hidden space-x-8 xl:flex">
                <p className="header-links">Explore</p>
                <p className="header-links">Stats</p>
                <p className="header-links">Resources</p>
                <p className="header-links">Create</p>
                </div>
                <div className="hidden lg:flex space-x-8 items-center cursor-pointer">
                    <UserCircleIcon 
                    onClick={() => {isAuthenticated ? router.push('/account') : router.push('/login')}}
                    className="h-8 text-gray-600 hover:text-black" />
                    <ViewListIcon className="h-8 text-gray-600 hover:text-black"/>
                    </div>
                </div>
        </header>
    )
}

export default Header
