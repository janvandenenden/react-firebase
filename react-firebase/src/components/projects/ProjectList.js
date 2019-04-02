import React from 'react';
import ProjectSummary from './ProjectSummary';

//Rather than writing multiple times the overview of a project it is better to extract this to a seperate component
//If we want to change the template of the projectsummary we can just edit it in one place.
//We add projects && projects.map....ETC because we don't want to do all of this when the projects arrau is empty
const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">          
            { projects && projects.map(project => {
                return(
                    <ProjectSummary project={project} key={project.id}  />
                )
            })}
        </div>
    )
};

export default ProjectList