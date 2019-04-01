import React from 'react';
import ProjectSummary from './ProjectSummary';

//Rather than writing multiple times the overview of a project it is better to extract this to a seperate component
//If we want to change the template of the projectsummary we can just edit it in one place.

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
};

export default ProjectList