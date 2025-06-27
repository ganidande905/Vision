<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>

  </div>
  
</template>

<script>
import Header from './components/Header.vue';


export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
/* Add global styles here */
body {
  margin: 0;
  font-family: "Poppins";
  width: 100%;
  height: 100%;
  background-color: black;
  background-size: 55px 55px;
  overflow-x: hidden;
}
main {
  min-height: 80vh;

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

</style>