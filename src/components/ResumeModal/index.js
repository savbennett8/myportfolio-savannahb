import React from 'react';

function ResumeModal({ onClose }) {
    return (
        <>
            <div className="modalBackdrop">
                <div className="modalContainer">
                    <a onClick={onClose} className="modalBtn" href="#back">← Back</a>
                    <h3 className="modalTitle">Resume</h3>
                    <div className="modalLinks">
                        <a href={require('../../assets/resume/Resume.pdf').default} className="modalBtn" target="_blank">Download Resume</a>
                    </div>
                    <p>This modal is under construction, though, you're still able to download my resume using the button above.</p>
                </div>
            </div>
        </>
    );
};

export default ResumeModal;