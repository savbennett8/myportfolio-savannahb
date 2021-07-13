import React from 'react';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <nav id="nav">
            <ul className="links">
                <li>
                    <a className="active" href="#about" onClick={() => setContactSelected(false)}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                </li>
                <li>
                    <a href="/resume" onClick={() => setContactSelected(false)}>Resume</a>
                </li>
                <li>
                    <a onClick={() => setContactSelected(true)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;