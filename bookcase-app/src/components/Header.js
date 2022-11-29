import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkStyle = styled.span `
    padding: 10px 10px;
    color: #9f215a;
    font-weight: bold;
    text-decoration: none;
`

function Header() {
    return (
        <>
            <LinkStyle><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></LinkStyle>
            <LinkStyle><Link to="/bookcase" style={{ textDecoration: 'none' }}>Bookcase</Link></LinkStyle>
            <LinkStyle><Link to="/about" style={{ textDecoration: 'none' }}>About</Link></LinkStyle>
        </>
        
    )
}

export default Header