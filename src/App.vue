<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue';
</script>

<template>
     <Navbar/>
     <Transition
      enter-active-class="fade-enter-active"
      enter-from-class="fade-enter-from"
      enter-to-class="fade-enter-to"
      leave-active-class="fade-leave-active"
      leave-from-class="fade-leave-from"
      leave-to-class="fade-leave-to"
      >
    
      <RouterView />
  </Transition>
</template>

<style scoped>
 .fade-enter-active, .fade-leave-active {
 transition: opacity 0.5s ease, transform 0.5s ease;
 }
 
 .fade-enter-from, .fade-leave-to {
 opacity: 0;
 transform: translateX(-100%);
 }
 
 .fade-enter-to, .fade-leave-from {
 opacity: 1;
 transform: translateX(0);
 }
 
</style>
