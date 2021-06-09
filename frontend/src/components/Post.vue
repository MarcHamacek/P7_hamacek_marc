<template>
  <div :posts="posts">
    <div class="border border-secondary rounded mt-3" :key="post.id" v-for="post in posts">
      <div class="col">
        <div
          class="
            row
            justify-content-between bg-light
            border-bottom border-secondary
            pl-2
            pr-2
          "
        >
          <p>
            {{ post.User.firstName }} {{ post.User.lastName }}
            {{ post.updatedAt }}
          </p>
          <p>
            <i
              @click.prevent="deletePost"
              class="fas fa-times text-danger text-right"
            ></i>
          </p>
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.content }}
          </p>
          <a href="#" class="text-dark">Voir commentaires</a>
        </div>
        <div class="card-body bg-light">
          <input type="text" name="comment" id="comment">
          <input class="btn btn-primary" type="submit" value="Commenter">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    posts: Array,
    post: Object,
  },
  methods: {
    async deletePost() {
      console.log("delete");
    },
  },
};
</script>