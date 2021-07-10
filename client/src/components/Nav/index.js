import React from 'react';

function Nav() {
    return (
        <header>
            <h2>
                <a href="/" aria-label="homepage">Savannah</a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="/resume">Resume</a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;