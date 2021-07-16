import React from 'react';

function PortfolioModal({ onClose, currentProject }) {
    const { title, description, appLink, githubRepo } = currentProject;

    return (
        <>
            <div className="modalBackdrop" id="projectDetails">
                <div className="modalContainer">
                    <a onClick={onClose} className="modalBtn" href="#back">← Back</a>
                    <h3 className="modalTitle">{title}</h3>
                    <p>{description}</p>
                    <div className="modalLinks">
                        <a href={appLink} className="modalBtn" target="_blank">Deployed Application</a>
                        <a href={githubRepo} className="modalBtn" target="_blank">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioModal;