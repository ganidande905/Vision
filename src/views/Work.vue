<template>
    <section class="work-section">
      <h1 class="section-title">Work Experience</h1>
      <div class="work-list">
        <div class="work-card" v-for="(job, index) in workExperience" :key="index">
          <div class="logo-box">
            <img :src="job.logo" :alt="job.company" />
          </div>
          <div class="content">
            <h2>{{ job.role }} <span class="company">@ {{ job.company }}</span></h2>
            <p class="meta">
              {{ job.duration }} | {{ job.location }} | <span class="type">{{ job.type }}</span>
            </p>
            <p class="description">{{ job.description }}</p>
            <div class="tech-stack">
              <span class="tech" v-for="(tech, idx) in job.technologies" :key="idx">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { workExperience } from '@/models/workModel.js';
  
  export default {
    name: 'WorkExperience',
    data() {
      return {
        workExperience,
      };
    },
  };
  </script>
  
  <style scoped>
  .work-section {
    padding: 2rem;
    max-width: 1000px;
    margin: auto;
  }
  
  .section-title {
    font-size: 2rem;
    color: white;
    margin-bottom: 2rem;
  }
  
  .work-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .work-card {
    background: #1c1c1c;
    padding: 1.5rem;
    border-radius: 12px;
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.05);
  }
  
  .logo-box img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    border-radius: 8px;
    background: white;
    padding: 4px;
  }
  
  .content {
    flex: 1;
  }
  
  h2 {
    font-size: 1.2rem;
    color: white;
    margin-bottom: 0.3rem;
  }
  
  .company {
    color: #8ab4f8;
    font-weight: 500;
  }
  
  .meta {
    font-size: 0.9rem;
    color: #bbbbbb;
    margin-bottom: 0.6rem;
  }
  
  .type {
    background: #333;
    padding: 2px 6px;
    border-radius: 5px;
    font-size: 0.75rem;
    color: #facc15;
  }
  
  .description {
    color: #dddddd;
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech {
    background: #2d2d2d;
    color: white;
    padding: 5px 10px;
    font-size: 0.75rem;
    border-radius: 5px;
    font-weight: 500;
  }
  </style>