import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <h1>My Bookcase</h1>
            <Link to="/">Home</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
            <Link to="/about">About</Link>
        </>
        
    )
}

export default Header