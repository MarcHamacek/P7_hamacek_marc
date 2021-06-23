<template>
  <div class="col border border-success mt-2 pt-2 pb-3">
    <AddPost />
    <div :key="post.id" v-for="post in posts">
      <Post :post="post" />
    </div>
  </div>
</template>

<script>
import AddPost from "./AddPost.vue";
import Post from "./Post.vue";

export default {
  name: "Posts",
  components: {
    AddPost,
    Post,
  },
  props: {
    posts: Array,
  },
};
</script>