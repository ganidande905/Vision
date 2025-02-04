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

        <!-- Work Section -->
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

        <!-- Socials Section -->
        <transition name="fade" appear>
          <div class="socials">
            <ul>
              <li>
                <button><a href="src/assets/Ganeswara D.pdf">Resume</a></button>
              </li>
              <li><a href="https://www.github.com/ganidande905"><i class='bx bxl-github'></i></a></li>
              <li><a href="www.linkedin.com/in/ganeswara-dande-b973b5261"><i class='bx bxl-linkedin'></i></a></li>
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

    <!-- Image Section -->
    <transition name="fade" appear>
      <div class="image">
        <img src="@/assets/image.webp" alt="My image">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style scoped>
/* Global Reset */
body {
  margin: 0;
  overflow-x: hidden;
}

/* Fade-in transition */
.fade-enter-active {
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
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
  transform: translate(-30px,-10px);

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
  margin-top: 40px;
}

.skills h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align:start;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

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
  h1{

    font-size: 30px;
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

    font-size: 30px;
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
