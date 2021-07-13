import React, { useState } from 'react';
import Portfolio from '../Portfolio';

function PortfolioModal({ onClose, currentProject }) {
    const { title, description, appLink, githubRepo } = currentProject;

    return (
        <>
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <a onClick={onClose} className="modalBtn">← Back</a>
                    <h3 className="modalTitle">{title}</h3>
                    <p>{description}</p>
                    <div className="modalLinks">
                        <a href={appLink} className="modalBtn">Deployed Application</a>
                        <a href={githubRepo} className="modalBtn">GitHub Repository</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioModal;