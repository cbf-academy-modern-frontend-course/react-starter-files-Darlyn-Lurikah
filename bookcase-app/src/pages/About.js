import Header from "../components/Header"

function About () {
    return (
        <div>
            <Header/>
            <header>
                <h3>Welcome to the Bookcase application</h3>
            </header>
            <p>The following application was created by Darlyn. 
                this bookcase app displays a list of books that a user
                can save to a local bookcase. 

                Click on the 'Add +' button to add a book to your bookcase.
                Use the search bar to find the latest books by name, author, 
                or description.
            </p>
        </div>
    )
}

export default About