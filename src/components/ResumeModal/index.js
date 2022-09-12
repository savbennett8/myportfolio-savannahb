import React from 'react';

function ResumeModal({ onClose }) {
    return (
        <>
            <div className="modalBackdrop" id="resume">
                <div className="modalContainer">
                    <a onClick={onClose} className="modalBtn" href="#nav">← Back</a>
                    <h2 className="modalTitle">Resume</h2>
                    <div className="modalLinks">
                        <a href={require('../../assets/resume/Resume.pdf').default} className="modalBtn" target="_blank">Download Resume</a>
                    </div>
                    <p className="modalText">This modal is under construction. She's not looking her best right now, but you can still download the resume!</p>
                </div>
            </div>
        </>
    )
}

export default ResumeModal;