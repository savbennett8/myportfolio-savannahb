import React, { useState } from 'react';
import ResumeModal from '../ResumeModal';

function Nav(props) {
    const {
        setContactSelected
    } = props;

    const [resumeSelected, setResumeSelected] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleResumeModal = () => {
        setResumeSelected();
        setIsModalOpen(!isModalOpen);
    };
    return (
        <>
            {isModalOpen && <ResumeModal resumeSelected={resumeSelected} onClose={toggleResumeModal} />}
            <nav id="nav">
                <ul className="links">
                    <li>
                        <a className="active" href="#nav" onClick={() => { setContactSelected(false) }}>About Me</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => setContactSelected(false)}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#resume" id="main"
                            onClick={() => {
                                setContactSelected(false)
                                toggleResumeModal()
                            }}
                        >Resume</a>
                    </li>
                    <li>
                        <a href="#nav" onClick={() => setContactSelected(true)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;