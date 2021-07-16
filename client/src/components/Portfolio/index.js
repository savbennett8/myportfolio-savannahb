import React, { useState } from 'react';
import bookSearch from "../../assets/photos/portfolio/book-search.JPG";
import neonJungle from "../../assets/photos/portfolio/neon-jungle.jpg";
import techBlog from "../../assets/photos/portfolio/tech-blog.JPG";
import socialNetworkApi from "../../assets/photos/portfolio/social-network-api.jpg";
import workScheduler from "../../assets/photos/portfolio/work-scheduler.jpg";
import snekGame from "../../assets/photos/portfolio/snek-game.jpg";
import PortfolioModal from '../PortfolioModal';

function Portfolio() {
    const ptflCards = [
        {
            title: 'Snek Game',
            image: snekGame,
            description: "As our very first group project in the boot camp, we created an interactive frontend game based on the classic '70's computer game: Snake. Although I wish I could say I actually knew what I was doing when we created this, I have to attribute most of my work to our team-lead, who was an already-experienced coder when we started the boot camp. He most-definitely held our hands through the entire thing. Nonetheless, I am still proud of the work I did to contribute and the amazing result of everyone's hard work.",
            appLink: 'https://rjhelm.github.io/snek-game/canvas.html',
            githubRepo: 'https://github.com/rjhelm/snek-game/'
        },
        {
            title: 'Work-Day Schedule',
            image: workScheduler,
            description: "As one of my very first frontend projects, getting this simple schedule-tracker application to work felt like a huge win. Using Bootstrap styling for the first time and some basic Javascript functions, I was able to create a data-persistent application to help employee's keep track of their day-to-day work to-do's. The time slots are color-coded dependent on the current time of day to help visualize time-management around those to-do's. This was deployed using GitHub Pages.",
            appLink: 'https://savbennett8.github.io/work-day-scheduler/',
            githubRepo: 'https://github.com/savbennett8/work-day-scheduler'
        },
        {
            title: 'Social Network Backend API',
            image: socialNetworkApi,
            description: "Using a NoSQL database, MongoDB, as well as its cohort Mongoose, I created API routes to be used in a social networking application. These routes handle GET, POST, PUT, and DELETE requests for users and their posts, as well as POST and DELETE requests for reactions to posts and mainting a list of friends. Since this was a backend-only project, the Application Link will download a video demonstration of how these routes work.",
            appLink: 'https://drive.google.com/file/d/19uSZhzoRG7DTP-rspEJKsvLrS1_nIOaH/view?usp=sharing',
            githubRepo: 'https://github.com/savbennett8/NoSQL-social-network-api'
        },
        {
            title: 'Neon Jungle',
            image: neonJungle,
            description: "In collaboration with my peer, as our final project in the bootcamp, we wanted to create a website where he could sell his reptilian friends that he keeps as pets and breeds to sell. In this full-stack MERN application, deployed using Heroku, I implemented everything on the backend using GraphQL, MongoDB, and Apollo, as well as a few other packages to help with authentication. I was able to help out on the frontend with some of the component's functionality as well.",
            appLink: 'https://lovely-carlsbad-caverns-60308.herokuapp.com/',
            githubRepo: 'https://github.com/matty-bennett/neon-jungle'
        },
        {
            title: 'Tech Blog',
            image: techBlog,
            description: "Deployed using Heroku, this CMS-style blog site is a simple post and comment blog for the technology community to share their tech knowledge. The architectural structure of the site follows the Model-View-Controller paradigm and uses Handlebars.js templating, as well as Sequelize ORM to communicate with the database and Express.js to help handle authentication and session storage.",
            appLink: 'https://boiling-springs-97301.herokuapp.com/',
            githubRepo: 'https://github.com/savbennett8/tech-blog'
        },
        {
            title: "Google Book Search",
            image: bookSearch,
            description: "A website that allows you to search for and keep a list of favorite books using Google's Book Search API. As a homework assignment, I refactored the code I was given to use GraphQL API's and Apollo instead of the RESTful API's that were already implemented.",
            appLink: "https://frozen-lake-23648.herokuapp.com/",
            githubRepo: "https://github.com/savbennett8/book-search-engine"
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
                    <article key={card.image}>
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
                            <li><a onClick={() => toggleModal(card, i)} key={card.title} className="button" href="#projectDetails">More</a></li>
                        </ul>
                    </article>
                ))}
            </section>
        </>
    );
};

export default Portfolio;