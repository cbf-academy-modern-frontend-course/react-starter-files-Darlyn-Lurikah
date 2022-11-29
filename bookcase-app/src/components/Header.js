import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
            <Link to="/about">About</Link>
        </>
        
    )
}

export default Header