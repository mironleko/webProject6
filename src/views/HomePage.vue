<template>
  <div>
    <h1>Početna stranica</h1>
    <router-link to="/create-blog" class="create-blog-link">Stvori Blog</router-link>

    <div v-if="blogs.length > 0">
      <h1>Ukupan broj blogova: {{ totalBlogs }}</h1>

      <BlogList :blogs="blogs" />
    </div>
    <p v-else class="no-blogs">Nema blogova.</p>
  </div>
</template>

<script>
import BlogList from '../components/BlogList.vue';
import { useBlogStore } from '../store/blogStore';

export default {
  components: {
    BlogList,
  },
  name: "HomePage",
  data() {
    return {
      blogs: [],
    };
  },
  computed: {
    totalBlogs() {
      const blogStore = useBlogStore();
      return blogStore.totalBlogsCount; 
    }
  },
  async created() {
    const blogStore = useBlogStore();
    blogStore.fetchBlogs();
    this.blogs = blogStore.blogs; 
  },
  async mounted() {
    const blogStore = useBlogStore();
    await blogStore.fetchBlogs();
    this.blogs = blogStore.blogs;
  },
};
</script>


<style scoped>
.create-blog-link {
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.about-blog-link {
  text-decoration: none;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
}
.blog-list {
  margin-top: 20px;
}

.blog-item {
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.blog-link {
  text-decoration: none;
  color: #333;
}

.blog-content {
  margin-top: 10px;
  font-size: 16px;
}

.no-blogs {
  margin-top: 20px;
  font-size: 18px;
  color: #888;
}

.comments-view-link {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #f8f9fa;
  color: #007bff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
}

.comments-view-link:hover {
  background-color: #e2e6ea;
}

</style>
