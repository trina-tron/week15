

//import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllIdsMu, getDataMu} from '../../lib/data';


export async function getStaticProps({ params }) {
  const itemData = await getDataMu (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    }
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

export default function Field({itemData}){

let x = '{"' + itemData.acf_fields + '"}';
x = x.replaceAll(',', '","');
x = x.replaceAll(':','":"');
console.log(x);
let y = JSON.parse(x);
console.log(y)
console.log(y.name);
itemData.acf_fields = y;

  return(
    <Layout>
      <div className="row text-center">
        <h1>{itemData.post_title}</h1>
      </div>
      <article className="card col-6 m-auto">
        <div className="card-body">
            <h5 className="card-title">{y.name}</h5>
        </div>
      </article>
    </Layout>
  )
}



