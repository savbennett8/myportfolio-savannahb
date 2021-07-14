import React, { useState } from 'react';
import bookSearch from "../../assets/photos/portfolio/book-search.JPG";
import placeholder from "../../assets//photos/portfolio/placeholder.jpg";
import PortfolioModal from '../PortfolioModal';

function Portfolio() {
    const ptflCards = [
        {
            title: "Google Book Search",
            image: bookSearch,
            description: "A website that allows you to search for and keep a list of favorite books using Google's Book Search API. As a homework assignment, I refactored the code I was given to use GraphQL API's and Apollo instead of the RESTful API's that were already implemented.",
            appLink: "https://frozen-lake-23648.herokuapp.com/",
            githubRepo: "https://github.com/savbennett8/book-search-engine"
        },
        {
            title: 'Neon Jungle',
            image: placeholder,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            appLink: '',
            githubRepo: ''
        },
        {
            title: 'Title',
            image: placeholder,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            appLink: '',
            githubRepo: ''
        },
    ];

    const [currentProject, setCurrentProject] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = (project, i) => {
        setCurrentProject({ ...project, index: i });
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <h1 id="portfolio">Projects Pertaining to My Progress:</h1>
            {isModalOpen && <PortfolioModal currentProject={currentProject} onClose={toggleModal} />}
            <section className="posts">
                {ptflCards.map((card, i) => (
                    <article>
                        <header>
                            <h2>{card.title}</h2>
                        </header>
                        <div className="image fit">
                            <img
                                src={card.image}
                                alt={card.title}
                            />
                        </div>
                        <ul className="actions special">
                            <li><a onClick={() => toggleModal(card, i)} key={card.title} className="button" href="#more">More</a></li>
                        </ul>
                    </article>
                ))}
            </section>
        </>
    );
};

export default Portfolio;