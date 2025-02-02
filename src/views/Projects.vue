<template>
    <div class="projects">
      <h1>My Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { fetchProjects } from '../controllers/projectController';
  
  export default {
    name: 'Projects',
    data() {
      return {
        projects: []
      };
    },
    created() {
      this.projects = fetchProjects();
    }
  };
  </script>
  
  <style scoped>
  .projects {
    padding: 20px;
  }
  </style>
  