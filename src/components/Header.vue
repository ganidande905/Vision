<template>
    <header class="header">
      <nav>
        <ul>
          <li class="active"><router-link to="/">Home</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/blogs">Blogs</router-link></li>
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
  background-color: black;
  background-size: 55px 55px;
  position: relative;
  color: white;
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
  color: white; /* Black text color */
  border-radius: 10px; /* Rounded corners for buttons */
  transition: all 0.3s ease; /* Smooth hover animation */
}

/* Hover and active styles */
.header ul li a:hover,
.header ul li a.router-link-active {
  background: #797878ad; /* Light pink background on hover */
  color: white; /* Dark purple text color on hover */
}
</style>
