//import Head from 'next/head';
import Layout from '../../components/layout';
import {getIdOwners, getOwnerTogether} from '../../lib/data';


export async function getStaticProps({ params }) {
  const itemData = await getOwnerTogether(params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getIdOwners();
  return {
    paths,
    fallback: false
  };
}



export default function PeopleFriends({itemData}){
 // console.log(detail);
  return(
    <Layout>
      <div className="row text-center">
        <h1>Info about {itemData.name}</h1>
      </div>
      <article className="card col-6 m-auto">
        <div className="card-body">
            <h5 className="card-title">{itemData.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{itemData.type}</h6>
          <h6 className="card-subtitle">Favorite Snack: {itemData.snack}</h6>
            <p className="card-text">Born on: {itemData.dob}</p>

        </div>
        
        
      </article>
    </Layout>
  )
}

