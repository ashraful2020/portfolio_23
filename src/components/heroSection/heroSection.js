import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blast from '../blastAnim/blast';
import Typewriter from 'typewriter-effect';
import './hero.scss'

const name = ['A', 's', 'h', 'r', 'a', 'f', 'u', 'l'];
const title = ['W', 'e', 'b', '', '', 'd', 'e', 'v','e', 'l', 'o', 'p', 'e', 'r'];


const HeroSection = () => {
    const [letterAnimation, setLetterAnimation] = useState('text-animate');
    useEffect(() => {
        setTimeout(() => {
            setLetterAnimation('text-animate-hover');
        }, 2000);
    }, []);
    return (
        <div className='first-section hero-container containerSpacing'>
            <main className='hero-page'>
                <h1>
                    <span className={`${letterAnimation} ___12`}>H</span>
                    <span className={`${letterAnimation} ___13`}>i</span>
                    <span className={`${letterAnimation} ___14`}>,</span>
                    <br />
                    <span className={`${letterAnimation} ___15`}>I</span>
                    <span className={`${letterAnimation} ___16`}>’</span>
                    <span className={`${letterAnimation} ___17`}>m</span>
                    {" "}
                    <Blast
                        letterAnimation={letterAnimation}
                        title={name}
                        index={15}
                    />
                    <br />
                    <Blast
                        letterAnimation={letterAnimation}
                        title={title}
                        index={22}
                    />
                </h1>
                <p className="text-desc">
                    <Typewriter
                        options={{
                            strings: ['Web & Application Developer', 'React Js Developer',"Next JS Developer"],
                            autoStart: true,
                            loop: true,
                            delay: 100
                        }}
                    />
                </p>
                {/* <p className="text-desc">Web & Application Developer</p> */}
                <Link to={"/contact"} className='contact-btn'>
                    <div>
                        <span className="bg switch__bg"></span>
                        <span className="base switch__border-color"></span>
                        <span className="text">contact me</span>
                    </div>
                </Link>
            </main>
        </div>
    );
};

export default HeroSection;