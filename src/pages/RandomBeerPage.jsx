import { useEffect, useState } from "react";

function RandomBeersPage() {
    const [beer, setBeer] = useState(null)

    const getBeer = async () => {
        try {
            const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`)
            if(response.status === 200){
                const beer = await response.json()
                setBeer(beer)
                console.log(beer)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getBeer()
    }, [])

    return beer ? (
        <div>
            <img src={beer.image_url} alt={beer.name} style={{height: "300px"}}/>
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.contributed_by}</p>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default RandomBeersPage;
