import { Header, Banner, Collections } from '../pages/components/index';
import Head from 'next/head'

export default function Home() {
  return (
    <div className='select-none'>
      <Head>
        <title>OpenSea, the largest NFT marketplace</title>
        <link rel="icon" href="/opensea.svg" />
      </Head>
      <Header />
      <Banner />
      <main>
        <section>
          <Collections />
        </section>
      </main>
    </div>
  )
}
