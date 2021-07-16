import React from "react";

function Intro() {
    return (
        <>
            <div id="intro">
                <h1>Savannah Bennett</h1>
                <p>Welcome to my Full-Stack Web Development Portfolio. Come on in, I hope you see something you like.</p>
                <ul className="actions">
                    <li><a href="#header" className="icon-double-angle-down icon-3x"></a></li>
                </ul>
            </div>
            <header id="header">
                <a href="/" className="logo">Savannah</a>
            </header>
        </>
    );
};

export default Intro;