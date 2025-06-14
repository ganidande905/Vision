<template>
  <div class="blog-section">
    <h1>Latest Blogs</h1>
    <div class="blog-grid">
      <div
        v-for="(blog, index) in blogs"
        :key="index"
        class="blog-card"
        @click="goTo(blog.link)"
      >
        <h2 class="card-title">{{ blog.title }}</h2>
        <p class="card-preview">{{ blog.preview }}</p>
        <span class="card-link">Read More →</span>
      </div>
    </div>
  </div>
</template>

<script>
import { blogs } from "@/models/blogModel.js";

export default {
  name: "BlogSection",
  data() {
    return {
      blogs,
    };
  },
  methods: {
    goTo(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.blog-section {
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
  color: #f3f4f6;
  text-align: center;
}

.blog-section h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #ffffff;
}

.blog-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-content: center;
}

.blog-card {
  background-color: #1f1f1f;
  border: 1px solid #2a2a2a;
  border-radius: 12px;
  padding: 24px;
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.08);
}

.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.card-preview {
  font-size: 0.95rem;
  color: #d1d5db;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.card-link {
  font-size: 0.9rem;
  color: #60a5fa;
  font-weight: 600;
}
</style>