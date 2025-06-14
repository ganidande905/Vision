<template>
  <div class="container">
    <!-- Info Section -->
    <transition name="fade" appear>
      <div class="info">
        <h1>Hello, I'm <br /> Ganeswar Dande.</h1>
        <h2>📍Telangana, India</h2>
        <h3>Pursuing Bachelors in Comp.Sci at Amrita Vishwa Vidyapeetam, Kerala</h3>
        <p>
          This space is a reflection of my journey—showcasing my skills, projects, and the things I love building.
          From crafting elegant user experiences to solving complex problems, I’m here to turn ideas into reality.
        </p>

        <transition name="fade" appear>
          <div class="work">
            <p>I'm currently working on:</p>
            <div class="lists">
              <ul class="left">
                <li>Frontend Development</li>
                <li>Mobile Development</li>
                <li>Backend & Databases</li>
              </ul>
              <ul class="right">
                <li>Open Source Contribution</li>
                <li>DevOps</li>
                <li>Mentorship & Community</li>
              </ul>
            </div>
          </div>
        </transition>

        <transition name="fade" appear>
          <div class="socials">
            <ul>
              <li><a href="https://drive.google.com/file/d/1r_wvpIpVOVE6hb8wHfc2PSJ-V-ucRb1E/view?usp=sharing" target="_blank" class="resume-link"><i class='bx bxs-file'></i></a> </li>
              <li><a href="https://www.github.com/ganidande905"><i class='bx bxl-github'></i></a></li>
              <li><a href="https://www.linkedin.com/in/ganeswaradande"><i class='bx bxl-linkedin'></i></a></li>
              <li><a href="mailto:dandegani57@gmail.com"><i class='bx bx-at'></i></a></li>
            </ul>
          </div>
        </transition>

        <!-- Skills Section -->
        <transition name="fade" appear>
          <div class="skills">
            <h2>Skills</h2>
            <div class="skills-grid">
              <div class="skill-item" v-for="(skill, index) in skillList" :key="index">
                {{ skill }}
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="profile-section">
        <div class="image">
          <img src="@/assets/image.webp" alt="My image" />
        </div>

        <div class="github-contributions">
          <h3>My GitHub Contributions</h3>
          <img
            src="https://github-readme-stats.vercel.app/api?username=ganidande905&show_icons=true&hide=stars&show=prs_merged_percentage&show_owner=false&count_private=true&&theme=dark#gh-dark-mode-only"
            alt="GitHub Contributions"
            class="github-graph"
          />
        </div>

        <section class="leetcode-tracker">
          <h2>My LeetCode Stats</h2>
          <img
            src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fdandegani57&logo=leetcode&logoColor=yellow"
            alt="LeetCode Badge"
            class="leetcode-badge"
          />
        </section>

        <div class="last-update">
          <p>Last updated on : 13th March 2025</p>
        </div>
      </div>
    </transition>
  </div>
<Work/>
  <Education />
</template>

<script>
import Education from "@/views/Education.vue";
import Work from "./Work.vue";
import { skills as skillList } from "@/models/skillsModel.js";

export default {
  name: "Info",
  components: {
    Education,
    Work
  },
  data() {
    return {
      skillList,
    };
  },
};
</script>
<style scoped>
body {
  margin: 0;
  overflow-x: hidden;
  background-color: #0f0f0f;
  color: #e5e7eb;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  max-width: 1100px;
  margin: auto;
  padding: 50px 30px;
}
.info {
  flex: 1;
  max-width: 550px;
}

h1 {
  color: white;
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 15px;
}

h2, h3, p, li, a {
  color: #e5e7eb;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

.work {
  margin-top: 20px;
}

.work p {
  font-size: 18px;
  font-weight: bold;
}

.lists {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.left, .right {
  list-style: none;
  padding: 0;
}

.left li, .right li {
  margin-top: 8px;
}

.image img {
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

.socials {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.socials ul {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  text-decoration: none;
}

.socials button {
  background-color: grey;
  color: black;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s ease;
  text-decoration: none;
}
.socials button a{
  color: black;
  text-decoration: none;
}
.socials button:hover {
  background-color: black;
}
.socials button a:hover{
  color: white;
  text-decoration: none;
}

.socials a i {
  font-size: 32px;
  color: white;
  text-decoration: none;
}

.skills {
  margin-top: 30px;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill-item {
  background-color: #1f2937;
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  transition: transform 0.2s ease;
}

.skill-item:hover {
  transform: scale(1.05);
  background-color: #374151;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.leetcode-tracker {
  text-align: center;
}

.leetcode-badge {
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

.github-contributions {
  text-align: center;
  width: 100%;
}

.github-graph {
  max-width: 70%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

.last-update p {
  font-size: 12px;
  color: #9ca3af;
}
</style>
