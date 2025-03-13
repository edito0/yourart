import React from 'react';
import './about.css'

function About() {
    return (
        <>
            <div className='bgabout' id='aboutsection'>
                <div className='about'>
                    <div className='aboutimage'>
                        <img src="https://edito0.github.io/Mountain-Biker/img/edito%20logo%20vec.png" alt="" />
                    </div>
                    <div className='aboutinfo'>
                        <h1>ABOUT US</h1>
                        <p> Hello, My name is Mohit Bagdi
                            I had Created this Website as my College Practicum Project. <br />
                            This website is hub for artist here they can create, edit,  share and even can take review from diffrent
                            proffetional artists. <br />
                            Hope You will like the webpage!</p>
                        <div class="aboutMe">
                            <a href="https://edito0.github.io/edito/" target="_blank">More About me</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About;
