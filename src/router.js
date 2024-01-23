import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import BlogPost from './components/BlogPost.vue';
import NotFoundPage from './components/NotFoundPage.vue'; 
import CreateBlog from './components/CreateBlog.vue'; 
import BlogList from './components/BlogList.vue'

const routes = [
  {
    path: '/',
    name:'HomePage',
    component: HomePage
  },
  {
    path: "/blog/:id",
    component: BlogPost
  },
  {
    path: '/create-blog',
    component: CreateBlog
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage 
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: BlogList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
