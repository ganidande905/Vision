<template>
  <div class="cards-container">
    <article v-for="(job, index) in jobs" :key="index" class="card">
      <!-- Project Screenshot -->
      <section class="card__hero">
        <img :src="job.screenshot" :alt="job.title" class="card__screenshot" />
      </section>

      <section class="card__content">
        <header class="card__hero-header">
          <span>{{ job.title }}</span>
          <img :src="job.icon" :alt="job.company" class="card__icon" />
        </header>

        <!-- Project Description -->
        <p class="card__description">{{ job.description }}</p>
      </section>

      <footer class="card__footer">
        <div class="card__job-summary">
          <div class="card__job">
            <p class="card__job-title">{{ job.company }}</p>
          </div>
        </div>

        <button class="card__btn">View</button>
      </footer>
    </article>
  </div>
</template>

<script>
import { jobs } from "@/models/projectModel.js"; // Import jobs data

export default {
  data() {
    return {
      jobs
    };
  }
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.card {
  margin: auto;
  width: min(350px, 100%);
  background-color: #fefefe;
  border-radius: 1rem;
  padding: 0.5rem;
  color: #141417;
  overflow: hidden;
  border: 1px solid #ddd;
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
  padding: 1rem;
}

.card__hero-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.card__description {
  margin: 0.5rem 0;
  font-size: 0.875rem;
  color: #555;
}

.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  font-weight: 700;
  border-top: 1px solid #ddd;
}

.card__btn {
  padding: 0.5rem 1.25rem;
  border-radius: 1rem;
  background-color: #141417;
  color: #fff;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}
</style>