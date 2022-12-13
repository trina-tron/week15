

//import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllIdsMon, getDataMon} from '../../lib/data';
import Link from 'next/link';


export async function getStaticProps({ params }) {
  const itemData = await getDataMon (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate:60,
  };
}

export async function getStaticPaths() {
  const paths = await getAllIdsMon();
  return {
   paths,
   fallback: false
  };
}



export default function Field1({itemData}){
//console.log(itemData);
/*var regex = /(<([^>]+)>)/ig
,   content = itemData.post_content
,   result = content.replace(regex, "");

content = itemData.post_content*/


      let x = '{"' + itemData.acf_fields + '"}';
      x = x.replace(/,/g,'","');
      x = x.replace(/:/g,'":"');
      console.log(x)
      var y = JSON.parse(x);
     console.log(y)
     //console.log(y.name);
     //itemData.acf_fields = y;
      

  
  return(
    <Layout>
    <div className="row text-center">
      <h1>{itemData.post_title}</h1>
    </div>
    <div className="card w-50 mx-auto text-bg-light mb-3">
  <div className="card-header text-center">Famous Monument in {y.city} </div>
  <div className="card-body">
    <h5 className="card-title">{y.name}</h5>
    <p className="card-text">{y.name} in {y.city}, {y.country} is {y.age} and is most known for being the {y.known_for}.</p>
 <Link href='/monuments/learn'>
 <a className="btn btn-primary">Go Back</a>

 </Link>
  </div>
</div>
    
  </Layout>
  )
}

