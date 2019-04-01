import React from 'react';

const ProjectDetails = (props) => {
const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint ipsa, eaque ratione ipsam praesentium ullam dolore, dicta, nisi consequatur nulla reprehenderit. Rerum, adipisci sit. Sit magnam rerum nostrum quae recusandae.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Post by Jan Van den Enden</div>
                <div>1st of April, 2pm</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
