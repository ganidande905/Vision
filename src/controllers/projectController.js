import { getProjects, getProjectById } from '../models/projectModel';

export function fetchProjects() {
  return getProjects();
}

export function fetchProjectDetails(id) {
  return getProjectById(id);
}
