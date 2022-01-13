import { Header, NotLoggedIn } from "../components/index";
import Head from "next/head";

import { useMoralis } from 'react-moralis';

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
