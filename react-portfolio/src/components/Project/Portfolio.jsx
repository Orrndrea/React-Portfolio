import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      
     
      
      repoUrl: 'https://github.com/Orrndrea'
    },
   
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedUrl={project.deployedUrl}
          repoUrl={project.repoUrl}
        />
      ))}
    </section>
  );
}

export default Portfolio;
