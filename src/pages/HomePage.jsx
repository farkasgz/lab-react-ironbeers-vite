import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <Link to='/beers'>
                <img src='src/assets/beers.png' alt="all beers" style={{height: "200px"}}/>
                <h1>All Beers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat eum officia vero, vitae, excepturi fugit earum error, praesentium exercitationem vel. Iure totam quis non sunt modi quaerat sint reprehenderit!</p>
            </Link>
            <Link to='/beers/random'>
                <img src='src/assets/random-beer.png' alt="random beer" style={{height: "200px"}}/>
                <h1>Random Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat eum officia vero, vitae, excepturi fugit earum error, praesentium exercitationem vel. Iure totam quis non sunt modi quaerat sint reprehenderit!</p>
            </Link>
            <Link to='/beers/new'>
                <img src='src/assets/new-beer.png' alt="new beer" style={{height: "200px"}}/>
                <h1>New Beer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam fugiat eum officia vero, vitae, excepturi fugit earum error, praesentium exercitationem vel. Iure totam quis non sunt modi quaerat sint reprehenderit!</p>
            </Link>
        </div>
    )
}

export default HomePage;
