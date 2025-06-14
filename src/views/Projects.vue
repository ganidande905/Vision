<template>
  <div class="featured-wrapper">
    <!-- Work Projects -->
    <h1 class="section-title">Work Projects</h1>
    <div class="featured-projects">
      <article
        v-for="(project, index) in projects"
        :key="'work-' + index"
        class="featured-card compact"
      >
        <div class="status-column">
          <span :class="['status-badge', project.status]">
            {{ project.status.charAt(0).toUpperCase() + project.status.slice(1) }}
          </span>
        </div>
        <div class="featured-content">
          <div class="featured-text">
            <div class="logo-badge">{{ project.badge || project.title.split(' ')[0] }}</div>
            <h2 class="title">{{ project.title }}</h2>
            <p class="date">{{ project.date }}</p>
            <p class="description">{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="live-view">
              <span class="live-text">Live view →</span>
              <span class="live-bg"></span>
            </a>
          </div>
          <div class="featured-image">
            <img :src="project.screenshot" :alt="project.title" />
          </div>
        </div>
      </article>
    </div>

    <!-- Open Source Contributions -->
    <h1 class="section-title">Open Source Contributions</h1>
    <div class="featured-projects">
      <article
        v-for="(project, index) in openSource"
        :key="'oss-' + index"
        class="featured-card compact"
      >
        <div class="status-column">
          <span :class="['status-badge', project.status]">
            {{ project.status.charAt(0).toUpperCase() + project.status.slice(1) }}
          </span>
        </div>
        <div class="featured-content">
          <div class="featured-text">
            <div class="logo-badge">{{ project.badge || project.title.split(' ')[0] }}</div>
            <h2 class="title">{{ project.title }}</h2>
            <p class="date">{{ project.date }}</p>
            <p class="description">{{ project.description }}</p>
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="live-view">
              <span class="live-text">Go to PR →</span>
              <span class="live-bg"></span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { projects, openSource } from "@/models/projectModel.js";

export default {
  data() {
    return {
      projects,
      openSource,
    };
  },
};
</script>

<style scoped>
.featured-wrapper {
  padding: 1.5rem;
  max-width: 1100px;
  margin: auto;
  background: transparent;
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 2rem 0 1rem;
  color: white;
}

.featured-projects {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.featured-card {
  background: rgb(41, 40, 40);
  color: #1a1a1f;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.featured-card.compact {
  padding: 1rem 1.2rem;
}

.status-column {
  width: 60px;
  display: flex;
  justify-content: center;
}

.status-badge {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  padding: 0.4rem 0.6rem;
  border-radius: 0.4rem;
  font-size: 0.65rem;
  font-weight: bold;
  color: black;
  text-align: center;
  text-transform: uppercase;
}

.status-badge.completed {
  background-color: #10b981;
}
.status-badge.ongoing {
  background-color: #f59e0b;
}
.status-badge.hold {
  background-color: #6b7280;
}

.featured-content {
  display: flex;
  gap: 1rem;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
}

.featured-text {
  flex: 1;
  max-width: 100%;
}

.logo-badge {
  background: #6d95d6;
  color: white;
  border-radius: 9999px;
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
  display: inline-block;
}

.title {
  color: white;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}

.date {
  font-size: 0.75rem;
  color: #cfcfcf;
  margin-bottom: 0.4rem;
}

.description {
  color: white;
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.live-view {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 9999px;
  padding: 0.5rem 1.2rem;
  color: white;
  background: black;
  font-weight: 600;
  text-decoration: none;
  z-index: 0;
  font-size: 0.85rem;
}

.live-view .live-bg {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  background: white;
  z-index: -1;
  transition: left 0.4s ease;
}

.live-view:hover {
  color: black;
}

.live-view:hover .live-bg {
  left: 0;
}

.featured-image {
  max-width: 220px;
}

.featured-image img {
  width: 100%;
  border-radius: 0.6rem;
  object-fit: cover;
  border: 1px solid #e5e7eb;
}
</style>