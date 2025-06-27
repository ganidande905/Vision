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
              <li>
            <a href="https://drive.google.com/file/d/17pruCoVc3vzTlxGtutCjGcfbwvu2P7EX/view?usp=sharing" target="_blank" class="resume-button">
              View Resume
            </a>
          </li>
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
          <p>Last updated on : 16th June 2025</p>
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
  flex-wrap: wrap;
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
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}
.resume-button {
  display: inline-block;
  background-color: #1f2937;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.resume-button:hover {
  background-color: #374151;
  transform: scale(1.05);
}

.socials {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
}

.socials ul {
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
.socials button a {
  color: black;
  text-decoration: none;
}
.socials button:hover {
  background-color: black;
}
.socials button a:hover {
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
  max-width: 100%;
}

.leetcode-tracker {
  text-align: center;
}

.leetcode-badge {
  width: 100%;
  max-width: 250px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

.github-contributions {
  text-align: center;
  width: 100%;
}

.github-graph {
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(255, 255, 255, 0.1);
}

.last-update p {
  font-size: 12px;
  color: #9ca3af;
}

/* 🌐 Responsive Styling */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
  }

  .info,
  .profile-section {
    max-width: 100%;
    text-align: center;
  }

  h1 {
    font-size: 38px;
  }

  .lists {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .left li,
  .right li {
    margin: 5px 0;
  }

  .skills-grid {
    justify-content: center;
  }

  .image {
    display: none; /* 🔥 Hides profile image on small screens */
  }

  .profile-section {
    gap: 10px;
    margin-top: 20px;
  }
}
</style>