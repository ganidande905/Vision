<template>
  <transition name="fade" appear>
  <div class="cards-container">
    <article
      v-for="(project, index) in projects"
      :key="index"
      class="card"
    >
    <span class="project-status" 
      :class="{
        'ongoing': project.status === 'ongoing',
        'hold': !project.status || project.status === 'hold', 
        'completed': project.status === 'completed'
      }">
  {{
    project.status === "ongoing" ? "Ongoing" :
    project.status === "completed" ? "Completed" :
    "Hold"
  }}
</span>
      <section class="card__hero">
        <img :src="project.screenshot" :alt="project.title" class="card__screenshot" />
      </section>

      <section class="card__content">
        <header class="card__hero-header">
          <span>{{ project.title }}</span>
          <img :src="project.icon" :alt="project.stack" class="card__icon" />
        </header>
        <p class="card__description">{{ project.description }}</p>
      </section>

      <footer class="card__footer">
        <div class="card__projects-summary">
          <div class="card__projects">
            <p class="card__projects-title">{{ project.stack }}</p>
          </div>
        </div>

        <button class="card__btn">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <span class="btn-text default-text">View</span>
            <span class="btn-text hover-text">Go to GitHub Code</span>
          </a>
        </button>
      </footer>
    </article>
  </div>
</transition>
</template>

<script>
import { projects } from "@/models/projectModel.js";

export default {
  data() {
    return {
      projects
    };
  }
};
</script>

<style scoped>
.project-tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff6b6b;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 15px;
  text-transform: uppercase;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}
.project-status {
  position: absolute;
  top: 10px;
  right: -15px;
  color: rgb(0, 0, 0);
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 3px;
  text-transform: uppercase;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  transform: rotate(10deg);
  transform-origin: center;
}

.project-status.ongoing {
  background-color: #ff9800;
}
.project-status.hold {
  background-color: #888888;
}
.project-status.completed {
  background-color: #4CAF50;
}
.project-status::before {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
  top: 50%;
  left: -5px;
  transform: translateY(-50%);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
}

.card {
  width: calc(33.333% - 2rem);
  min-width: 280px;
  max-width: 350px;
  background-color: #fefefe;
  border-radius: 1rem;
  padding: 0.5rem;
  color: #141417;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  position: relative;
  animation: fadeInUp 0.8s ease-out both;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.card:hover {
  transform: translateY(-10px);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.1);
}
.card__hero {
  width: 100%;
  height: 180px;
  overflow: hidden;
}

.card__screenshot {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
}

.card__content {
  flex-grow: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
}

.card__icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.card__description {
  flex-grow: 1;
  min-height: 100px;
  max-height: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5rem 0;
  font-size: 0.975rem;
  color: #555;
  font-family: 'Times New Roman', Times, serif;
}
.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  font-weight: 100;
  border-top: 1px solid #ddd;
  margin-top: auto;
}
.card__btn {
  position: relative;
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  background-color: #141417;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.3s ease;
  width: 150px;
  height: 45px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__btn:hover {
  background-color: #000;
}
.btn-text {
  position: absolute;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hover-text {
  transform: translateY(100%);
  opacity: 0;
}

.card__btn:hover .default-text {
  transform: translateY(-100%);
  opacity: 0;
}

.card__btn:hover .hover-text {
  transform: translateY(0);
  opacity: 1;
}
.card__btn a {
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>