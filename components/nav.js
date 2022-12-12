
import Link from 'next/link';

export default function Nav(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <Link href="/">
 <a className="navbar-brand" >Travel</a>
 </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item active">
      <Link href="/">
      <a className="nav-link">Home <span class="sr-only"></span></a>
      </Link>
      </li>

      <li className="nav-item">
      <Link href="../../monuments/learn">
        <a className="nav-link">Monuments</a>
      </Link>
      </li>

      <li className="nav-item">
      <Link href="../../restaurants/eat">
        <a className="nav-link">Restauants</a>
      </Link>
      </li>

       <li className="nav-item">
      <Link href="../../museums/see">
        <a className="nav-link">Museums</a>
      </Link>
      </li>
    </ul>
  </div>
</nav>


  );
}