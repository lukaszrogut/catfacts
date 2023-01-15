import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CatFactInterface } from '../interfaces';
import CatFact from './CatFact';

export default function CatFactList() {
    const [catFacts, setCatFacts] = useState<CatFactInterface[] | null>(null);

    useEffect(() => {
        fetch('https://cat-fact.herokuapp.com/facts')
        .then(response => response.json())
        .then(data => setCatFacts(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className='cats__list'>
            {catFacts?.map( (data: CatFactInterface) => {
                return <Link key={data._id} to={`catfact/${data._id}`}>
                    <CatFact {...data} />
                </Link> })
            }
            {!catFacts && <p>No facts to display</p>}
        </div>
    )
}
