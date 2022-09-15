import Link from 'next/link';

//Thought this would link the pages together but I must not have routed them together correctly
export function FriendLink ( { tag, id, name }) {
  return <Link key={"link"+id} href={tag+id}>
            <a key={id} className="list-group-item list-group-item-action">{name}</a>
         </Link>
}

export function FriendTitle ( { isPet } ) {
  let text = (isPet) ? "Friendly Pet" : "Friendly Person";
  return <h2 className="col-6 m-auto my-4">{text}</h2>
}

export default function FriendList ( { family, isPet } ) {
    let tag = (isPet) ? '/pet/' : '/owner/';
    return <article className="col-md-5 col-12">
      <FriendTitle isPet= {isPet} />
      <div className="list-group">
        {family.map( ({id, name}) => <FriendLink key={"pl"+id} tag={tag} id={id} name={name} /> )}
      </div>
    </article>
    
}