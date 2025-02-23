<template>
  <div class="container">
    <!-- Info Section -->
    <transition name="fade" appear>
      <div class="info">
        <h1>Hello, I'm <br /> Ganeswar Dande.</h1>
        <p>
          <b>Welcome to My World! 🌟</b><br>
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
                <li>Generative AI</li>
                <li>Mentorship & Community</li>
              </ul>
            </div>
          </div>
        </transition>
        <transition name="fade" appear>
          <div class="socials">
            <ul>
              <li>
                <button><a href="https://drive.google.com/file/d/1rMunmVbGuji8wiM0rZBwvVrVmEvPwueR/view?usp=sharing">Resume</a></button>
              </li>
              <li><a href="https://www.github.com/ganidande905"><i class='bx bxl-github'></i></a></li>
              <li><a href="https://www.linkedin.com/in/ganeswaradande"><i class='bx bxl-linkedin'></i></a></li>
            </ul>
          </div>
        </transition>

        <!-- Skills Section -->
        <transition name="fade" appear>
          <div class="skills">
            <h2>Skills</h2>
            <div class="skills-grid">
              <div class="skill-item">JavaScript</div>
              <div class="skill-item">Vue.js</div>
              <div class="skill-item">React</div>
              <div class="skill-item">Tailwind CSS</div>
              <div class="skill-item">Node.js</div>
              <div class="skill-item">PostgreSQL</div>
              <div class="skill-item">Flutter</div>
              <div class="skill-item">Firebase</div>
              <div class="skill-item">Java</div>
              <div class="skill-item">C</div>
              <div class="skill-item">Python</div>      
              <div class="skill-item">HTML/CSS</div>          
            </div>

          </div>
        </transition>
      </div>
    </transition>
    <transition name="fade" appear>
  <div class="profile-section">
    <div class="image">
      <img src="@/assets/image.webp" alt="My image">
    </div>
    <div class="github-contributions">
      <h3>My GitHub Contributions</h3>
      <img 
        src="https://github-readme-streak-stats.herokuapp.com/?user=ganidande905" 
        alt="GitHub Contributions"
        class="github-graph"
      />
    </div>
    <section class="leetcode-tracker">
    <h2>My LeetCode Stats</h2>
    <img src="https://img.shields.io/badge/dynamic/json?style=for-the-badge&labelColor=black&color=%23ffa116&label=Solved&query=solvedOverTotal&url=https%3A%2F%2Fleetcode-badge.vercel.app%2Fapi%2Fusers%2Fdandegani57&logo=leetcode&logoColor=yellow" alt="LeetCode Badge" class="leetcode-badge" />
    </section>
  </div>
</transition>
   </div>

<Education/>
   
</template>

<script>
import Education from "@/views/Education.vue"; 
export default {
  name: "Info",
  components:{
    Education,
}

};
</script>

<style scoped>
/* Global Reset */
body {
  margin: 0;
  overflow-x: hidden;
}



/* Container */
.container {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 50px;
  max-width: 1100px;
  margin: auto;
  padding: 50px 30px;
  flex-direction: row;
  
}

/* Info Section */
.info {
  flex: 1;
  max-width: 550px;

}

h1 {
  margin-top: 0%;
  font-size: 60px;
  font-weight: 100;
  margin-bottom: 15px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}

/* Work Section */
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

/* Image Section */
.image img {
  max-width: 350px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);


}

/* Socials Section */
.socials {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
}

.socials ul {
  display: flex;
  align-items: center;
  gap: 15px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.socials button {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-right: 0;
}

.socials button a {
  text-decoration: none;
  color: white;
}

.socials button:hover {
  background-color: #333;
}

.socials a i {
  text-decoration: none;
  font-size: 32px;
  color: black;
}


/* Skills Section */
.skills {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-right: 0;
}

.skills h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align:start;
  margin-right: 0;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-right: 0;

}

.skill-item {
  flex-grow: 200;
  flex-grow: 1;
  background-color: #a7a1a1b6;
  padding: 10px 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  margin-bottom: 0;
  margin-right: 0;
}
.projects-wrapper {
  max-width: 1100px; 
  margin: auto;
  padding-top: 50px; 
  text-align: left;
}


.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.leetcode-tracker h2{
  font-size: 20px;
}
.leetcode-tracker {
  text-align: center;

}

.leetcode-badge {
  width: 250px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}
/* GitHub Contribution Block */
.github-contributions {
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.github-contributions h3 {
  font-size: 20px;
  font-weight: bold;
}

.github-graph {
  flex-wrap: wrap;
  max-width: 70%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
@media screen and (min-width:50px) and (max-width: 375px){
  .container{
    margin: auto;
  }
  .info{
    margin: auto;
  }
  h1{

    font-size: 30px;
  }
  .image{
    display: none;
  }
  .skills-grid{
    grid-template-columns: repeat(2,150px);
    grid-template-rows: repeat(6);

 
  }
}
@media  screen and (min-width: 376px) and (max-width: 430px){
  .container{
    margin: auto;
  }
  .info{
    margin: auto;
  }
  h1{

    font-size: 30px;
  }
  .image{
    display: none;
  }

  
}
@media  screen and (min-width: 431px) and (max-width: 735px){
  .container{
    margin:auto;
  }
  .info{
    margin: auto;
  }
  h1{

    font-size: 30px;
  }
  .image{
    display: none;
  }


  
}
@media screen and (min-width: 1000px) and (max-width: 1800px){
  .container{
    margin: auto;
  }
  .info{
    margin: auto;
  }

}
@media screen and (min-width: 736px) and (max-width: 999px){
  .container{
    margin: auto;
  }
  .info{
    margin: auto;
  }
  h1{

    font-size: 60px;
  }
  .skill-item {
  background-color: #a7a1a1b6;
  padding: 6px 6px;
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
}

}


</style>
