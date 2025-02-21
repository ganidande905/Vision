<template>
    <div class="projects">
      <h1>My Projects</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description }}</p>
          <img :src="project.img" alt="image"/>
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
    display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  max-width: 1100px;
  margin: auto;
  padding: 50px 30px;
  flex-direction: column;
  }
  img {
  width: 200px;
  height: auto;
  display: block;
  margin-top: 10px;
}
  </style>
  