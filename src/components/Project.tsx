import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {/* Projects will be added here in the future */}
            <div className="project placeholder">
                <p>Coming Soon...</p>
            </div>
        </div>
    </div>
    );
}

export default Project;