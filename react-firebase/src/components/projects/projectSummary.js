import React from 'react';

const ProjectSummary = (project) => {
    console.log(project)
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text darken-3">
                <span className="card-title">{project.project.title}</span>
                <p>Posted by Jan Van den Enden</p>
                <p className="grey-text">1st of April, 2pm</p>
            </div>
        </div> 
    )
}

export default ProjectSummary