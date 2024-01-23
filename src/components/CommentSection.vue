<template>
    <div class="comments-section">
      <div v-if="comments.length">
        <ul>
          <li v-for="comment in comments" :key="comment.id" class="comment-item">
            {{ comment.text }}
          </li>
        </ul>
      </div>
      <p v-else>Nema komentara.</p>
  
      <div class="comment-form">
        <textarea v-model="newComment" placeholder="Napiši komentar..." id="commentInput"></textarea>
        <p>Pregled komentara:</p>
        <div class="comment-preview">{{ newComment }}</div>
        <button @click="addComment">Dodaj komentar</button>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '../firebase.js';
  import { collection, getDocs, addDoc } from 'firebase/firestore';
  
  export default {
    props: {
      blogId: String
    },
    data() {
      return {
        comments: [],
        newComment: '' 
      };
    },
    async created() {
      await this.fetchComments();
    },
    methods: {
        async fetchComments() {
        try {
          const commentsRef = collection(db, 'blogs', this.blogId, 'comments');
          const querySnapshot = await getDocs(commentsRef);
          this.comments = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
        } catch (error) {
          console.error("Error fetching comments: ", error);
        }
      },
      async addComment() {
        if (this.newComment.trim() !== "") {
          const commentPayload = {
            text: this.newComment,
            created_at: new Date()
          };
          await addDoc(collection(db, 'blogs', this.blogId, 'comments'), commentPayload);
          this.comments.push(commentPayload);
          this.newComment = '';
          this.$emit('comment-added'); 
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .comments-section {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .comment-item {
    background: #f4f4f4;
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
  }
  
  .comment-form textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    resize: vertical;
  }
  
  .comment-form textarea:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
  }
  
  .comment-preview {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  button:active {
    transform: translateY(2px);
  }
  </style>
  