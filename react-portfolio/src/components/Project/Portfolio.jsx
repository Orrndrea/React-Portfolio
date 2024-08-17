import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-image1.jpg',
      deployedUrl: 'https://example.com/project1',
      repoUrl: 'https://github.com/yourusername/project1'
    },
    // Add more projects here
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
