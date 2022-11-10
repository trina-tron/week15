import { getAllIds, getData } from "../lib/data";

export async function getStaticProps({ params }) {
  const itemData = await getData (params.id);
  //console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths:[],
    fallback: false
  };
}


const Details = ({itemData}) => {
  return ( 
    <div>
      <h1>{itemData.post_title}</h1>
    </div>
   );
}
 
export default Details;