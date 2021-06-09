<template>
  <div class="col-8 border border-success mt-2 pt-2 pb-3">
    <AddPost />
    <Post :posts="posts" />
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