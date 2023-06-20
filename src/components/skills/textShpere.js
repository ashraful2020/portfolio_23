import React, { useEffect } from "react";
import "./textShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";
import { skillSet } from "../../data/data";

const TextShpere = () => {
    
    // Animation settings for Text Cloud
    useEffect(() => { 
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "React",
                "Vue",
                "Nuxt",
                "NodeJS",
                "Babel",
                "Jquery",
                "ES6",
                "GIT",
                "GITHUB",
            ];

            const options = {
                radius: 400,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };

            TagCloud(container, texts, options);
        
    }, []);

    return (
        <>
            <div className="text-shpere">
                {/* span tag className must be "tagcloud"  */}
                <span className="tagcloud"></span>
            </div>
            <div>
                Hello developer
            </div>
        </>
    );
};

export default TextShpere;
