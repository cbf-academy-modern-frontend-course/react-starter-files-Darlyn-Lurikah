import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'

const LinkStyle = styled.a `
    padding: 10px 10px;
    color: #9f215a;
    font-weight: bold;
`

function Header() {
    return (
        <div className='nav'>
            <LinkStyle><Link to="/">Home</Link></LinkStyle>
            <LinkStyle><Link to="/bookcase">Bookcase</Link></LinkStyle>
            <LinkStyle><Link to="/about">About</Link></LinkStyle>
        </div>
        
    )
}

export default Header