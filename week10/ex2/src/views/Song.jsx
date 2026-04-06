import{ Link } from 'react-router-dom'; 
export function Song({data}) {
    console.log(data);
    return (
        <>
         <nav>
        <ul>
        <li>
          <Link to="/">Go back home</Link>
        </li>
        </ul>
        </nav>
        <h1>Song</h1>
        </>
    )
}