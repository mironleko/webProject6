<template>
  <div class="blog-post">
    <button @click="goBack">Nazad</button>
    <div v-if="blog">
      <h2>{{ blog.title }}</h2>
      <p>{{ blog.content }}</p>
      <p>Broj komentara: {{ commentCount }}</p> 
      <CommentSection :blogId="blog.id"
      @comment-added="fetchComments" 
 />
    </div>
    <p v-else>Trazeni blog ne postoji.</p>
  </div>
</template>

<script>
import { db } from '../firebase.js';
import { doc, getDoc,collection,getDocs} from 'firebase/firestore';
import CommentSection from './CommentSection.vue';

export default {
  components: {
    CommentSection
  },
  data() {
    return {
      blog: null,
      commentCount: 0
    };
  },
  async created() {
    const blogId = this.$route.params.id;
    await this.fetchBlogData(blogId);
    if (this.blog) {
    await this.fetchComments();
  }  },
  methods: {
    async fetchBlogData(blogId) {
      const blogRef = doc(db, 'blogs', blogId);
      const blogSnapshot = await getDoc(blogRef);
      if (blogSnapshot.exists()) {
        this.blog = { id: blogSnapshot.id, ...blogSnapshot.data() };
      }
    },
    async fetchComments() {
      const commentsRef = collection(db, 'blogs', this.blog.id, 'comments');
      const querySnapshot = await getDocs(commentsRef);
      this.commentCount = querySnapshot.docs.length;
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>



  
  <style scoped>
.blog-post {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.blog-post h2 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.blog-post p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f4f4f4;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
}

li:last-child {
  margin-bottom: 0;
}

h3 {
  font-size: 1.5rem;
  margin-top: 2rem;
}

button.back-button {
  background-color: #f8f9fa;
  color: #333;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
}

button.back-button:hover {
  background-color: #e2e6ea;
}
</style>

  