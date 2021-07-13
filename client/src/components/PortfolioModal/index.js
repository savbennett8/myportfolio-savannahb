import React from 'react';

function PortfolioModal({ ptflCards }) {
    const { title, description, appLink, githubRepo } = ptflCards;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <button className="btn-nostyle">← Back</button>
                <h3 className="modalTitle">{title}</h3>
                <p>{description}</p>
                <div>
                    <a href={appLink}>
                        <button>Deployed Application</button>
                    </a>
                    <a href={githubRepo}>
                        <button>GitHub Repository</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioModal;