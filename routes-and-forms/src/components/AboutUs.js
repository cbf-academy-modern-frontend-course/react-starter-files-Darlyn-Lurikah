import React from 'react'; 
import { Link } from 'react-router-dom';

const AboutUs = (props) => {
    return (
        <div className="header">
            <h1>About</h1>
            <div className="breadcrumb">
                <Link to="/">Home</Link>
            </div>
            <div className="page">
                <h2>Welcome to our page</h2>
                <p>This is a page about us</p>
            </div>
        </div>
    )
}

export default AboutUs