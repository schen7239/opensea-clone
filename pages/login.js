import { Header } from "./components/index";
import Head from "next/head";

import { useMoralis } from 'react-moralis';
import { NotLoggedIn } from "./components/index";

function login() {
    const { isAuthenticated } = useMoralis();
  return (
    <div className="select-none">
    <Head>
      <title>Login | OpenSea</title>
      <link rel="icon" href="/opensea.svg" />
    </Head>
    <Header />
    <NotLoggedIn />
  </div>
  );
}
export default login;
