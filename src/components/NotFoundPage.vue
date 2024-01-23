<template>
    <div class="not-found">
      <h1>404 - Stranica nije pronađena</h1>
      <p>Žao nam je, ali tražena stranica nije dostupna.</p>
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
  font-family: 'Arial', sans-serif;
  color: #333;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.not-found p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.not-found a {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.not-found a:hover {
  background-color: #0056b3;
}
</style>
