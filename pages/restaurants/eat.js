//import Head from 'next/head';
import { getSortedListRest } from '../../lib/data';
import Layout from '../../components/layout';
import Link from 'next/link';



export async function getStaticProps () {
  const allData = await getSortedListRest();
  
  return {
      props: {
          allData
          
      }
  }
};


export default function Restaurants({allData}){
  return(
    <Layout home>
    <div className='container'>
      <div className='row'>
      <div className='col-12'>
          <h1 className="text-center p-2">Restaurants</h1>
          <h5 className="text-center p-2">Check out these restaurants in different Countries </h5>
      </div> 
      </div>
       <div className='row text-center'>
        <div className='col-12'>
            <div className="list-group d-inline-flex">
                  {allData.map(({id, name})=>(
                    <Link key={id} href={id}>
                    <a className='list-group-item list-group-active   '>
                      {name}
                    </a>
                    </Link>
                  ))}
                    
       
       </div>
      
        </div>
      </div>
    </div>
      
    </Layout> 
  )
}
