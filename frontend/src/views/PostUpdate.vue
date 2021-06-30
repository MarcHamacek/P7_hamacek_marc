<template>
  <form @submit.prevent="modifyPost" class="col border border-dark p-3">
    <div class="form-row form-group">
      <input
        class="col form-control-lg"
        aria-label="large"
        type="text"
        name="content"
        v-model="post.content"
        placeholder="Que voulez-vous publier ?"
      />
    </div>
    <div class="form-row justify-content-center">
      <input
        type="file"
        id="image"
        ref="image"
        accept="image/png, image/jpeg, image/jpg"
        class="btn btn-link"
      />
    </div>
    <div class="form-row justify-content-center">
      <input type="submit" class="col-2 btn btn-primary" value="Modifier" />
      <router-link
        @click.prevent="deletePostId"
        class="col-2 btn btn-dark"
        to="/feed"
        >Retour</router-link
      >
    </div>
  </form>
</template>
<script>
export default {
  name: "PostUpdate",
  data() {
    return {
      post: {
        content: "",
        image: "",
      },
    };
  },
  methods: {
    async modifyPost() {
      const content = this.post.content;
      const image = this.$refs.image.files[0];

      const fd = new FormData();
      fd.append("content", content);
      fd.append("image", image);

      if (!content) {
        alert("Veuillez remplir tous les champs !");
        return;
      } else {
        const id = localStorage.getItem("postId");

        const data = localStorage.getItem("groupomaniaUser");
        const user = JSON.parse(data);
        const token = user.token;

        const res = await fetch(`http://localhost:5000/posts/${id}`, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + token,
          },
          body: fd,
        });
        if (res.status !== 200) {
          alert("Votre publication n'a pas pu être modifiée !");
        } else {
          localStorage.removeItem("postId");
          this.$router.push({ name: "Feed" });
        }
      }
    },
    deletePostId() {
      localStorage.removeItem("postId");
    },
  },
};
</script>