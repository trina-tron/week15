//import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';


export default function Home(){
  return(
    <Layout home>
    <div className='container'>
      <div className='row'>
      <div className='col-12'>
          <h1 className="text-center p-2">Travel the World</h1>
          <h4 className="text-center p-2">Choose one of the categories below </h4>
           <h5 className="text-center p-2">See the five different countries featured </h5>
      </div> 
      </div>
       <div className='row text-center'>
        <div className='col-12'>
            <div className="list-group d-inline-flex">
                    <Link href='/monuments/learn'>
                    <a className='list-group-item list-group-active'>
                     Monuments
                    </a>
                    </Link>
                    <Link href='/restaurants/eat'>
                    <a className='list-group-item list-group-active'>
                     Restaurants
                    </a>
                    </Link>
                    <Link href='/museums/see'>
                    <a className='list-group-item list-group-active'>
                     Museums
                    </a>
                    </Link>
       </div>
      
        </div>
      </div>
    </div>
      
    </Layout> 
  )
}
