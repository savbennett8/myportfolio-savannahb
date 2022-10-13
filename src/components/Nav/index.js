import React from 'react';

function Nav(props) {
    const {
        setContactSelected, setResumeSelected
    } = props;

    return (
        <>
            <nav id="nav">
                <ul className="links">
                    <li>
                        <a className="active" href="#nav" onClick={() => {{ setContactSelected(false) } {setResumeSelected(false)}}}>About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => {{ setContactSelected(false)} {setResumeSelected(false)}}}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#nav" onClick={() => {{ setContactSelected(false)} {setResumeSelected(true)}}}>Resume</a>
                    </li>
                    <li>
                        <a href="#nav" onClick={() => {{ setContactSelected(true)} {setResumeSelected(false)}}}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;