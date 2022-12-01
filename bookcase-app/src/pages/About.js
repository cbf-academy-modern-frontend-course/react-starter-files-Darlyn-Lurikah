import Header from "../components/Header"
import styled from "styled-components"
import './About.css'
import '../App.css'

const AboutStyle = styled.div `
    text-align: center;
    background-color: #f5eff2;
    padding: 20px;
    border-radius: 20px;
    margin:70px auto;
    max-width: 700px;
`

function About () {
    return (
        <div>
            <div className='headerCenter'>
                <Header/>
                <h1>ABOUT</h1>
            </div>
            
            <AboutStyle>
                <h3>Welcome to the Bookcase application</h3>
                <p>
                The following application was created by Darlyn. 
                this bookcase app displays a list of books that a user
                can save to a local bookcase. 

                <br/>Click on the 'Add +' button to add a book to your bookcase.
                Use the search bar to find the latest books by name, author, 
                or description.
                </p>
            </AboutStyle>
            
        </div>
    )
}

export default About