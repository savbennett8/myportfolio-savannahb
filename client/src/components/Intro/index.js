import React from "react";

function Intro() {
    return (
        <>
            <div id="intro">
                <h1>Savannah Bennett</h1>
                <p>Welcome to my Full-Stack Web Development Portfolio. Come on in, I hope you see something you like.</p>
                <ul className="actions">
                    <li><a href="#about" className="button icon solid solo scrolly"><i class="icon-arrow-down"></i></a></li>
                </ul>
            </div>
            <header id="header">
                <a href="/" className="logo">Savannah</a>
            </header>
        </>
    );
};

export default Intro;