import Head from 'next/head';
import Nav from '../components/nav';

export default function Layout({children}){
  return(
    <div>
      <Head>
        <title>WP App</title>
      </Head>
      <Nav/>
      <main>{children}</main>
    </div>
  );
}