<template>
  <form @submit.prevent="createPost" class="col border border-dark p-3">
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
      <input type="submit" class="col-2 btn btn-primary" value="Publier" />
    </div>
  </form>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        content: "",
      },
    };
  },
  methods: {
    async createPost() {
      const content = this.post.content;
      if (!content) {
        alert("Veuillez remplir tous les champs !");
        return;
      } else {
        const data = localStorage.getItem("groupomaniaUser");
        const user = JSON.parse(data);
        const token = user.token;
        const userId = user.userId;
        const newPost = {
          content,
          userId,
        };
        const res = await fetch("http://localhost:5000/posts", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(newPost),
        });
        if (res.status !== 201) {
          alert("Votre post n'a pas pu être publié !");
          return;
        } else {
          this.$router.go();
        }
      }
      //   const data = await res.json();
      //
    },
  },
};
</script>