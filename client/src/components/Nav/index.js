import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <header>
            <h2>
                <a href="/" aria-label="homepage">Savannah</a>
            </h2>
            <nav>
                <ul>
                    <li>
                        <a href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                    </li>
                    <li>
                        <a href="/resume" onClick={() => setContactSelected(false)}>Resume</a>
                    </li>
                    <li>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;