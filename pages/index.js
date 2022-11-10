//import Head from 'next/head';
import { getSortedList } from '../lib/data';
import Layout from '../components/layout';
import Link from 'next/link';
//import FriendList from '../components/relationship';


export async function getStaticProps () {
  const allData = await getSortedList();
  
  return {
      props: {
          allData
          
      }
  }
};


export default function Home({allData}){
  return(
    <Layout home>
      <h1 className="text-center">Blog Posts</h1>
      <div className="list-group">
      </div>
       <div className="row align-center">
      {allData.map(({id, name})=>(
        <Link key={id} href={`\${id}`}>
        <a className='list-group-item list-group-active'>
          {name}
        </a>
        </Link>
      ))}
        </div>
    </Layout> 
  )
}
