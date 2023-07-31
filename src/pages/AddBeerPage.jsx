import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setTips] = useState('')
    const [attenuation_level, setAttLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        console.log(typeof(attenuation_level))
        const newBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
        console.log(newBeer)

        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers/new', {
                method: 'POST',
                body: newBeer,
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input value={name} onChange={event => setName(event.target.value)}/>
                </label>
                <label>
                    Tagline:
                    <input value={tagline} onChange={event => setTagline(event.target.value)}/>
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={event => setDescription(event.target.value)}/>
                </label>
                <label>
                    First Brewed:
                    <input value={first_brewed} onChange={event => setFirstBrewed(event.target.value)}/>
                </label>
                <label>
                    Brewer's Tips:
                    <input value={brewers_tips} onChange={event => setTips(event.target.value)}/>
                </label>
                <label>
                    Attenuation Level:
                    <input type='number' value={attenuation_level} onChange={event => setAttLevel(Number(event.target.value))}/>
                </label>
                <label>
                    Contributed By:
                    <input value={contributed_by} onChange={event => setContributedBy(event.target.value)}/>
                </label>
                <button type="submit">Add Beer</button>
            </form>
        </div>
    )
}

export default AddBeerPage;
