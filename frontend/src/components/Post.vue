<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
        <h5 class="card-title">
          {{ post.User.firstName }} {{ post.User.lastName }}
        </h5>
        <p class="card-text">{{ post.updatedAt }}</p>
      </div>
      <img class="card-img-top" :src="post.image" :alt="post.content" />
      <div class="card-body">
        <h6 class="card-title">{{ post.content }}</h6>
        <router-link
          @click.prevent="storePostId"
          to="/onePost"
          class="btn btn-info"
          >Voir commentaires</router-link
        >
      </div>
    </div>
    <div class="border border-secondary rounded mt-3">
      <div class="col">
        <div
          class="
            row
            justify-content-between
            bg-light
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
            <router-link @click.prevent="storePostId" to="/postUpdate"
              ><i class="far fa-edit text-dark"></i
            ></router-link>
            <a href="#" type="button">
              <i
                @click.prevent="deletePost"
                class="fas fa-times text-danger text-right"
              ></i
            ></a>
          </p>
        </div>
        <div class="card-body">
          <img src="" alt="" />
        </div>
        <div class="card-body">
          <p class="card-text">
            {{ post.content }}
          </p>
          <router-link
            @click.prevent="storePostId"
            to="/onePost"
            class="text-dark"
            >Voir commentaires</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  methods: {
    async deletePost() {
      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;
      const id = this.post.id;

      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.status === 200) {
        alert("Votre publication a bien été supprimée !");
        this.$router.go();
      } else {
        alert("Votre publication n'a pas pu être supprimée !");
      }
    },
    storePostId() {
      const id = this.post.id;
      localStorage.setItem("postId", JSON.stringify(id));
    },
  },
};
</script>