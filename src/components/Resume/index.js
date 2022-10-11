import React from 'react';

function ResumePage() {
    return (
        <>
            <div>
                <div>
                    <h1>Resume</h1>
                    <div className='modalLinks'>
                        <a href={require('../../assets/resume/Resume.pdf').default} className="button" target="_blank">Download Resume</a>
                    </div>
                    <p className="resumePage">Looking for more information about me? Download my resume using the button above! You can also check out more of my coding projects using the Github link at the bottom of the page.</p>
                </div>
            </div>
        </>
    );
};

export default ResumePage;