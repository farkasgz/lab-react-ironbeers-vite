import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [beers, setBeers] = useState([])

    const getBeers = async () => {
        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            if (response.status === 200) {
                const allBeers = await response.json()
                setBeers(allBeers)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeers()
    }, [])

    return beers[0] ? (
        <div>
            <h1>All Beers</h1>
            {beers.map(oneBeer => {
                return (
                    <Link
                        to={`/beers/${oneBeer._id}`}
                        key={oneBeer._id}
                    >
                        <img src={oneBeer.image_url} alt={oneBeer.name} style={{height: "200px"}}/>
                        <h2>{oneBeer.name}</h2>
                        <p>{oneBeer.tagline}</p>
                        <p>{oneBeer.contributed_by}</p>
                    </Link>
                )
            })}
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default AllBeersPage;
