<template>
  <div class="create-blog">
    <h2>Kreirajte novi blog</h2>
    <form @submit.prevent="createBlog">
      <div class="form-group">
        <label for="title">Naslov:</label>
        <input type="text" id="title" v-model="blogTitle" required />
      </div>
      <div class="form-group">
        <label for="content">Sadržaj:</label>
        <textarea id="content" v-model="blogContent" required class="large-content-textarea"></textarea>
      </div>
      <div class="form-buttons">
        <button type="submit" class="submit-button">Kreiraj blog</button>
        <button type="button" @click="goBack" class="back-button">Natrag na početnu</button>
      </div>
    </form>
  </div>
</template>
  
  <script>
  import { db } from '../firebase.js'; 
  import { collection, addDoc } from "firebase/firestore"; 

  export default {
    name: "CreateBlog",
    data() {
      return {
        blogTitle: "",
        blogContent: "",
      };
    },
    methods: {
      async createBlog() {
        const newBlog = {
    title: this.blogTitle,
    content: this.blogContent,
    created_at: new Date()
  };

  try {
    await addDoc(collection(db, 'blogs'), newBlog);
    this.blogTitle = "";
    this.blogContent = "";
    alert('Blog created successfully');
    this.$router.push({ name: 'HomePage' });
  } catch (error) {
    console.error("Error adding document: ", error);
    alert('Error creating blog');
  }
      },
      goBack() {
      this.$router.push('/');
    }
    },
  };
  </script>
  
  <style scoped>
  .create-blog {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  textarea.large-content-textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 300px; /* Adjust the height as needed */
    resize: vertical; /* Allow vertical resizing */
  }
  
  .form-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  
  button, .create-blog-link {
    text-decoration: none;
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    flex: 1;
    margin: 5px;
  }
  
  button:hover, .create-blog-link:hover {
    background-color: #0056b3;
  }
  </style>
  