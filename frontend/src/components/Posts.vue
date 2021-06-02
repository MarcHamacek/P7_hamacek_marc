<template>
  <div class="border-light" :posts="posts">
    <div class="border border-dark mt-3" :key="post.id" v-for="post in posts">
      <div class="col">
        <div
          class="row justify-content-between border-bottom border-dark pl-2 pr-2"
        >
          <p>
            {{ post.User.firstName }} {{ post.User.lastName }}
            {{ post.updatedAt }}
          </p>
          <p><i class="fas fa-times text-danger text-right"></i></p>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.content }}
          </p>
          <a href="#" class="text-dark">Voir commentaires</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  props: {
    posts: Array,
  },
};
</script>