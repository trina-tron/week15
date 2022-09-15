import Head from 'next/head';

import { getSortedListPet, getSortedListOwner } from '../lib/data';
import Layout from '../components/layout';
import FriendList from '../components/relationship';


export async function getStaticProps () {
  const owner = await getSortedListOwner();
  const pet = await getSortedListPet();
  return {
      props: {
          owner,
          pet
      }
  }
};


export default function Home({owner, pet}){
  return(
    <Layout home>
      <h1 className="text-center">Owner and Pets</h1>
      <div className="list-group">
      </div>
       <div className="row align-center">
      
         <FriendList family={owner} />
          <FriendList family={pet} isPet />
        </div>
    </Layout> 
  )
}
