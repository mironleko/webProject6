<template>
  <div class="blog-list">
    <h2>Popis blogova:</h2>
    <ul>
      <li v-for="blog in summarizedBlogs" :key="blog.id">
        <router-link :to="'/blog/' + blog.id" class="blog-item-link">
          <div class="blog-item">
            <h3>{{ blog.title }}</h3>
            <p class="blog-summary">{{ blog.summary }}</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'BlogList',
  props: {
    blogs: Array
  },
  computed: {
    summarizedBlogs() {
      return this.blogs.map(blog => ({
        ...blog,
        summary: blog.content.length > 100
          ? blog.content.substring(0, 100) + '...'
          : blog.content
      }));
    }
  }
};
</script>


<style scoped>
.blog-list {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
}

.blog-list h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
}


.blog-item {
  background: #f9f9f9;
  margin-bottom: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.blog-item-link {
  text-decoration: none;
  color: inherit; 
}

.blog-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  background-color: #e6e6e6;
}

.blog-item h3 {
  color: #007bff;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.blog-link:hover h3 {
  color: #0056b3;
}

.blog-summary {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .blog-item {
    padding: 1rem;
  }

  .blog-link h3 {
    font-size: 1.3rem;
  }

  .blog-summary {
    font-size: 0.9rem;
  }
}
</style>
