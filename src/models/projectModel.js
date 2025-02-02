export const projects = [
    { id: 1, name: 'Portfolio Website', description: 'A showcase of my work.' },
    { id: 2, name: 'E-commerce App', description: 'An online store application.' },
    { id: 3, name: 'Blog Platform', description: 'A blog content management system.' }
  ];
  
  export function getProjects() {
    return projects;
  }
  
  export function getProjectById(id) {
    return projects.find(project => project.id === id);
  }
  