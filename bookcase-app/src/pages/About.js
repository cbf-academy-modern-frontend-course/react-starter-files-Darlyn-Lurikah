import Header from "../components/Header"
import './About.css'

function About () {
    return (
        <div>
            <Header/>
            <div className="about-bg">
                <h3>Welcome to the Bookcase application</h3>
                <p>
                The following application was created by Darlyn. 
                this bookcase app displays a list of books that a user
                can save to a local bookcase. 

                <br/>Click on the 'Add +' button to add a book to your bookcase.
                Use the search bar to find the latest books by name, author, 
                or description.
                </p>
            </div>
            
        </div>
    )
}

export default About