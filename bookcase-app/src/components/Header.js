import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'

const LinkStyle = styled.span `
    padding: 10px 10px;
    color: #9f215a;
    font-weight: bold;
`

function Header() {
    return (
        <div>
            <h1>My e-book app</h1>
            <div className='nav'>
            <LinkStyle><Link to="/">Home</Link></LinkStyle>
            <LinkStyle><Link to="/bookcase">Bookcase</Link></LinkStyle>
            <LinkStyle><Link to="/about">About</Link></LinkStyle>
            </div>
        </div>
        
        
    )
}

export default Header