

//import Head from 'next/head';
import Layout from '../../components/layout';
import {getAllIdsMon, getDataMon} from '../../lib/data';


export async function getStaticProps({ params }) {
  const itemData = await getDataMon (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths2 = await getAllIdsMon();
  return {
   paths: paths2,
   fallback: false
  };
}



export default function Field({itemData}){
//console.log(itemData);
/*var regex = /(<([^>]+)>)/ig
,   content = itemData.post_content
,   result = content.replace(regex, "");

content = itemData.post_content*/
/* var string1 = JSON.stringify(itemData);

var parsed = JSON.parse(string1);  
const obj = parsed;
obj.forEach( 
  */  

      let x = '{"' + itemData.acf_fields + '"}';
      x = x.replace(/,/g,'","');
      x = x.replace(/:/g,'":"');
      console.log(x)
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



