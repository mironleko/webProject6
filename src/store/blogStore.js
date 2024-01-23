import { defineStore } from 'pinia';
import { db } from '../firebase.js';
import { collection, getDocs, addDoc } from 'firebase/firestore';

export const useBlogStore = defineStore({
  id: 'blog', 

  state: () => ({
    blogs: [],
  }),
  getters: {
    totalBlogsCount: (state) => state.blogs.length
  },
  actions: {
    async fetchBlogs() {
      try {
        const blogsRef = collection(db, 'blogs'); 
        const querySnapshot = await getDocs(blogsRef);
        this.blogs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    },

    async addBlog(blogData) {
      try {
        const blogsRef = collection(db, 'blogs'); 
        const docRef = await addDoc(blogsRef, blogData);
        const newBlog = {
          id: docRef.id,
          ...blogData,
        };
        this.blogs.push(newBlog);
        return newBlog;
      } catch (error) {
        console.error('Error adding blog:', error);
        throw error;
      }
    },
  },
});
