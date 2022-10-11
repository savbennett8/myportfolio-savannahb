import React from 'react';

function ResumePage() {
    return (
        <>
            <div>
                <div>
                    <h1>Resume</h1>
                    <button type="button">
                        <a href={require('../../assets/resume/Resume.pdf').default} className="button" target="_blank">Download Resume</a>
                    </button>
                    <p className="resumePage">This page is under construction, though, you're still able to download my resume using the button above.</p>
                </div>
            </div>
        </>
    );
};

export default ResumePage;