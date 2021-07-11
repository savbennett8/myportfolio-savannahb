import React from 'react';
import photo from "../../assets/portfolio/book-search.JPG";

function Portfolio(props) {
    const ptflCard = {
        title: "Google Book Search",
        appLink: "https://frozen-lake-23648.herokuapp.com/",
        githubRepo: "https://github.com/savbennett8/book-search-engine"
    };

    return (
        <section>
            <card>
                <h1>{ptflCard.title}</h1>
                <div>
                    <img
                        src={photo}
                        alt={ptflCard.title}
                        className="img-thumbnail mx-1 ptfl-img"
                    />
                </div>
                <div>
                    <a href={ptflCard.appLink}>
                        <button>Deployed Application</button>
                    </a>
                    <a href={ptflCard.githubRepo}>
                        <button>GitHub Repository</button>
                    </a>
                </div>
            </card>
        </section>
    );
};

export default Portfolio;