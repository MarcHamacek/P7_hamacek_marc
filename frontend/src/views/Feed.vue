<template>
  <div class="container">
    <Dashboard />
    <div class="row justify-content-around">
      <div class="col-4 border border-primary mt-2 pt-2 pb-3">
        <Users :users="users"/>
      </div>
      <div class="col-8 border border-success mt-2 pt-2 pb-3">
        <AddPost />
        <Posts :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard";
import AddPost from "../components/AddPost";
import Users from "../components/Users";
import Posts from "../components/Posts";

export default {
  name: "Feed",
  components: {
    Dashboard,
    AddPost,
    Users,
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