

//import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllIdsRest, getDataRest} from '../../lib/data';
import Link from 'next/link';


export async function getStaticProps({ params }) {
  const itemData = await getDataRest (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate:60,
  };
}

export async function getStaticPaths() {
  const paths2 = await getAllIdsRest();
  return {
    paths:paths2,
    fallback: false
  };
}



export default function Feild3({itemData}){
//console.log(itemData);
/*var regex = /(<([^>]+)>)/ig
,   content = itemData.post_content
,   result = content.replace(regex, "");

content = itemData.post_content*/
let x = '{"' + itemData.acf_fields + '"}';
x = x.replace(/,/g,'","');
x = x.replace(/:/g,'":"');
//console.log(x)
var y = JSON.parse(x);
//console.log(y)
//console.log(y.name);
//itemData.acf_fields = y;

  return(
    <Layout>
    <div className="row text-center">
      <h1>{itemData.post_title}</h1>
    </div>
    <div className="card w-50 mx-auto text-bg-light mb-3">
  <div className="card-header text-center">Famous Restaurant in {y.city} </div>
  <div className="card-body">
    <h5 className="card-title">{y.name}</h5>
    <p className="card-text">{y.name} in {y.city}, {y.country} serves {y.style} and is about {y.price_range}.</p>
 <Link href='/restaurants/eat'>
 <a className="btn btn-primary">Go Back</a>

 </Link>
  </div>
</div>

    
  </Layout>
  )
}



