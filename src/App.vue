<template>
  <div>
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
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
  font-family: "Playfair Display";
  width: 100%;
  height: 100%;
  --color: #E1E1E1;
  background-color: #F3F3F3;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent),
      linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%,transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%,transparent);
  background-size: 55px 55px;
}
main {
  min-height: 80vh;

}
</style>