import React, { useState } from 'react';
import bookSearch from "../../assets/portfolio/book-search.JPG";
import placeholder from "../../assets/portfolio/placeholder.jpg";
import PortfolioModal from '../PortfolioModal';

function Portfolio(props) {
    const ptflCards = [
        {
            title: "Google Book Search",
            image: bookSearch,
            appLink: "https://frozen-lake-23648.herokuapp.com/",
            githubRepo: "https://github.com/savbennett8/book-search-engine"
        },
        {
            title: 'Neon Jungle',
            image: placeholder,
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            appLink: '',
            githubRepo: ''
        },
    ];

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsModalOpen(true);
    };

    return (
        <section>
            {isModalOpen && <PortfolioModal currentProject={currentProject} />}
            <h1 id="portfolio">Projects Pertaining to My Progress:</h1>
            {ptflCards.map((card, i) => (
                <card>
                    <h2 onClick={() => toggleModal(card, i)} key={card.title}>{card.title}</h2>
                    <div>
                        <img
                            src={card.image}
                            alt={card.title}
                            className="img-thumbnail mx-1 ptfl-img"
                        />
                    </div>
                    <div>
                        <a href={card.appLink}>
                            <button>Deployed Application</button>
                        </a>
                        <a href={card.githubRepo}>
                            <button>GitHub Repository</button>
                        </a>
                    </div>
                </card>
            ))}
        </section>
    );
};

export default Portfolio;