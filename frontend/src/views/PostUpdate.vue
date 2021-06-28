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
        accept="image/png, image/jpeg, image/jpg"
        class="btn btn-link"
      />
    </div>
    <div class="form-row justify-content-center">
      <input type="submit" class="col-2 btn btn-primary" value="Modifier" />
      <router-link @click.prevent="deletePostId" class="col-2 btn btn-dark" to="/feed">Retour</router-link>
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
      const image = this.post.image;
      if (!content) {
        alert("Veuillez remplir tous les champs !");
        return;
      } else {
        const id = localStorage.getItem("postId");

        const data = localStorage.getItem("groupomaniaUser");
        const user = JSON.parse(data);
        const token = user.token;

        const modifiedPost = {
          content,
          image,
        };
        const res = await fetch(`http://localhost:5000/posts/${id}`, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(modifiedPost),
        });
        if (res.status !== 200) {
          alert("Votre publication n'a pu être modifiée !");
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