

//import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllIdsMu, getDataMu} from '../../lib/data';
import Link from 'next/link';


export async function getStaticProps({ params }) {
  const itemData = await getDataMu (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate:60,
  };
}

export async function getStaticPaths() {
  const paths2 = await getAllIdsMu();
  return {
    paths:paths2,
    fallback: false
  };
}


//console.log(itemData);
/*var regex = /(<([^>]+)>)/ig
,   content = itemData.post_content
,   result = content.replace(regex, "");

content = itemData.post_content*/

export default function Field2({itemData}){

let x = '{"' + itemData.acf_fields + '"}';
x = x.replaceAll(',', '","');
x = x.replaceAll(':','":"');
//console.log(x);
var y = JSON.parse(x);
//console.log(y)
console.log(y.image);
//itemData.acf_fields = y;

  return(
    <Layout>
    <div className="row text-center">
      <h1>{itemData.post_title}</h1>
    </div>
    <div className="card w-50 mx-auto text-bg-light mb-3">
  <div className="card-header text-center">Famous Museum in {y.city} </div>
  <div className="card-body">
    <h5 className="card-title">{y.name}</h5>
    <p className="card-text">{y.name} in {y.city}, {y.country} features {y.features} and is {y.admission_price} for admission.</p>
 <Link href='/museums/see'>
 <a className="btn btn-primary">Go Back</a>

 </Link>
  </div>
</div>
    
  </Layout>
  )
}



