<template>
  <div class="container-fluid col col-lg-10">
    <Dashboard />
    <div class="row justify-content-around">
      <Posts :posts="posts" />
    </div>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
import Posts from "../components/Posts.vue";

export default {
  name: "Feed",
  components: {
    Dashboard,
    Posts,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async fetchPosts() {
      const res = await fetch("http://localhost:5000/posts");

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.posts = await this.fetchPosts();
  },
};
</script>