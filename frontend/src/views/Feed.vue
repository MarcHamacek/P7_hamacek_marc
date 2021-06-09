<template>
  <div class="container">
    <div class="row justify-content-around">
      <Dashboard :users="users" />
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
      users: [],
    };
  },
  methods: {
    async fetchPosts() {
      const res = await fetch("http://localhost:5000/posts");

      const data = await res.json();

      return data;
    },
    async fetchUsers() {
      const res = await fetch("http://localhost:5000/users");

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.posts = await this.fetchPosts();
    this.users = await this.fetchUsers();
  },
};
</script>