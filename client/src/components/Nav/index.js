import React from 'react';

function Nav(props) {
    const {
        setContactSelected
    } = props;
    return (
        <nav id="nav">
            <ul className="links">
                <li>
                    <a className="active" href="#header" onClick={() => setContactSelected(false)}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                </li>
                <li>
                    <a href="/resume" onClick={() => setContactSelected(false)}>Resume</a>
                </li>
                <li>
                    <a href="#nav" onClick={() => setContactSelected(true)}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;