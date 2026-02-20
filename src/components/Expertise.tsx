import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faAws } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Python",
    "SQL",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript"
];

const labelsSecond = [
    "SpringBoot",
    "React.js",
    "NumPy",
    "Pandas"
];

const labelsThird = [
    "Git",
    "GitHub",
    "AWS Cloud"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Programming Languages</h3>
                    <p>Proficient in multiple programming languages with strong foundation in OOPs, Data Structures and Algorithms. Experienced in building robust backend systems and web applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Libraries & Frameworks</h3>
                    <p>Experienced with modern frameworks and libraries for both frontend and backend development. Skilled in building scalable applications using SpringBoot and React.js.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Tools & Platforms</h3>
                    <p>Proficient in version control and cloud platforms. Experienced in collaborating on projects using Git and deploying applications on AWS Cloud infrastructure.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;