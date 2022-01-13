import { LoggedIn, Header } from '../components/index';
import Head from 'next/head';

function account() {
  return (
    <div className="select-none">
      <Head>
        <title>Your Profile | OpenSea</title>
        <link rel="icon" href="/opensea.svg" />
      </Head>
      <Header />
      <LoggedIn />
    </div>
  );
}

export default account;
