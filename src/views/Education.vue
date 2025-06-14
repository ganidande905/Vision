<template>
  <section class="education-container">
    <h2 class="title">My Education Journey</h2>

    <div class="education-cards">
      <div v-for="(item, index) in educationData" :key="index" class="education-card">
        <h3 class="degree">{{ item.degree }}</h3>
        <p class="university">{{ item.university }} &bull; {{ item.year }}</p>
        <p class="description">{{ item.description }}</p>

        <div class="details" v-if="item.details && item.details.length">
          <div v-for="(subItem, subIndex) in item.details" :key="subIndex" class="detail">
            <h4 class="sub-title">{{ subItem.title }}</h4>
            <p class="sub-description">{{ subItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { education } from "@/models/educationModel.js";

export default {
  data() {
    return {
      educationData: education
    };
  }
};
</script>

<style scoped>
.education-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 20px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  color: white;
}

/* Cards Layout */
.education-cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.education-card {
  background: #1c1c1c;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(255, 255, 255, 0.1);
}

.degree {
  font-size: 22px;
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
}

.university {
  font-size: 16px;
  color: #aaa;
  margin-bottom: 10px;
}

.description {
  font-size: 15px;
  color: #ccc;
  margin-bottom: 15px;
}

.details {
  margin-top: 10px;
}

.detail {
  margin-bottom: 10px;
}

.sub-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
}

.sub-description {
  font-size: 14px;
  color: #bbbbbb;
}
</style>