<template>
  <div>
    <div class="row">
      <router-link @click.prevent="deleteCommentId" to="/onePost"
        >Retour</router-link
      >
    </div>
    <form @submit.prevent="updateComment">
      <div class="row justify-content-center">
        <div class="card-body border border-dark">
          <div class="row">
            <input
              type="text"
              placeholder="Commentez..."
              name="comment"
              v-model="comment.content"
            />
          </div>
          <div class="row">
            <input class="btn btn-primary" type="submit" value="Modifier" />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "UpdateComment",
  data() {
    return {
      comment: {
        content: "",
      },
    };
  },
  methods: {
    async updateComment() {
      const content = this.comment.content;
      const id = localStorage.getItem("commentId");

      const data = localStorage.getItem("groupomaniaUser");
      const user = JSON.parse(data);
      const token = user.token;

      const modifiedComment = { content };

      if (!content) {
        alert("Veuillez remplir tous les champs !");
      } else {
        const res = await fetch(`http://localhost:5000/posts/comments/${id}`, {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + token,
            "Content-type": "application/json",
          },
          body: JSON.stringify(modifiedComment),
        });
        if (res.status !== 200) {
            alert("Votre commentaire n'a pas pu être modifié !")
        } else {
            localStorage.removeItem("commentId");
            this.$router.push({name: 'OnePost'});
        }
      }
    },
    deleteCommentId() {
      localStorage.removeItem("commentId");
    },
  },
};
</script>