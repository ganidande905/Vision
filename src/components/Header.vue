<template>
    <header class="header">
      <nav>
        <ul>
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/Contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
  };
  </script>
  
<style scoped>
/* Header container styles */
.header {
  margin-top: 1%;
  margin-bottom: 0;
  text-align: center;
  padding: 20px; /* Simplified padding */
  width: 100%;
  height: 100%;
  --color: #E1E1E1;
  background-color: #F3F3F3;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
  position: relative;
  color: black;
}

/* Navigation menu styles */
.header ul {
    font-weight: 700;
  display: flex;
  justify-content: center; /* Centers the navigation menu */
  align-items: center; /* Aligns items vertically */
  gap: 20px; /* Space between menu items */
  list-style: none; /* Removes bullets from list items */
  padding: 0;
  margin: 0;
}

/* Link styles */
.header ul li a {
  text-decoration: none; /* Removes underlines */
  padding: 10px 20px; /* Increased padding for better usability */
  color: #000000; /* Black text color */
  border-radius: 0px; /* Rounded corners for buttons */
  transition: all 0.3s ease; /* Smooth hover animation */
}

/* Hover and active styles */
.header ul li a:hover,
.header ul li a.router-link-active {
  background: #797878ad; /* Light pink background on hover */
  color: #000000; /* Dark purple text color on hover */
}
</style>
