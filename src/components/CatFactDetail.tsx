import { ReactElement, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import { CatFactInterface } from '../interfaces';


export default function CatFactDetail():ReactElement {
    
    const {id} = useParams<string>();
    const [details, setDetails] = useState<CatFactInterface | null>(null)
    
    useEffect(() => {
        fetch(`https://cat-fact.herokuapp.com/facts/${id}`)
        .then(response => response.json())
        .then(data => setDetails(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className='catfact__wrap'>
            <div className='catfact'>
                <h2>Cat fact details</h2>
                <p><span>Fact:</span> {details?.text} </p>
                <p><span>Author</span>: {details?.user.name.first} {details?.user.name.last}</p>
                <img src={details?.user.photo} alt="useer" />
            </div>
            <Link to="/">go back to the list</Link>
        </div>
    )
}
