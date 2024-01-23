<template>
    <div class="not-found">
      <h1>404 - Stranica nije pronađena</h1>
      <p>Žao nam je, ali tražena stranica nije dostupna.</p>
      <!-- Dodajte opcionalni link za povratak na početnu stranicu ili neku drugu stranicu -->
      <router-link to="/">Povratak na početnu stranicu</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage'
  }
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  