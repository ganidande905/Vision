import carbonXImg from '../assets/project/CarbonX.jpeg'
export const projects = [
    { id: 1, name: 'CarbonX', description: 'The ultimate app for tracking and reducing your carbon footprint.', img: carbonXImg},

  ];
  
  export function getProjects() {
    return projects;
  }
  
  export function getProjectById(id) {
    return projects.find(project => project.id === id);
  }
  