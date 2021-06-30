<template>
  <div class="post">
    <router-link @click.prevent="deletePostId" to="/feed">Retour</router-link>

    <p>{{ post }}</p>
    <div>
      <img :src=post.image :alt=post.content>
    </div>
    <div class="col border border-secondary rounded">
      <div class="row">
        <p>{{ post.content }}</p>
      </div>
      <div class="row justify-content-center">
        <div class="card-body border border-dark">
          <div class="row">
            <input
              type="text"
              placeholder="Commentez..."
              name="comment"
              v-model="post.Comments.content"
            />
          </div>
          <div class="row">
            <input
              @click.prevent="commentPost"
              class="btn btn-primary"
              type="submit"
              value="Commenter"
            />
          </div>
        </div>
      </div>
      <div :key="comment.id" v-for="comment in post.Comments" class="row">
        <p>{{ comment.User.firstName }} {{ comment.User.lastName }}</p>
        <p>{{ comment.updatedAt }}</p>
        <p>{{ comment.content }}</p>
        <p>{{ comment.id }}</p>
        <p>
          <router-link
            to="/updateComment"
            @click.prevent="storeCommentId(comment.id)"
            ><i class="far fa-edit text-dark"></i
          ></router-link>
        </p>
        <p>
          <a href="#" type="button"
            ><i
              @click.prevent="deleteComment(comment.id)"
              class="fas fa-times text-danger"
            ></i
          ></a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnePost",
  data() {
    return {
      post: {
        User: [],
        Comments: [],
      },
    };
  },
  methods: {
    async fetchOnePost() {
      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;
      const id = localStorage.getItem("postId");

      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await res.json();

      return data;
    },

    async commentPost() {
      const content = this.post.Comments.content;

      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;

      const postId = localStorage.getItem("postId");

      const comment = { content, token, postId };

      if (!content) {
        alert("Veuillez écrire votre commentaire !");
      } else {
        const res = await fetch(
          `http://localhost:5000/posts/${postId}/comments`,
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + token,
              "Content-type": "application/json",
            },
            body: JSON.stringify(comment),
          }
        );
        if (res.status !== 201) {
          alert("Votre commentaire n'a pas pu être publié !");
        } else {
          this.$router.go();
        }
      }
    },
    async deleteComment(id) {
      const commentId = id;

      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;

      const res = await fetch(
        `http://localhost:5000/posts/comments/${commentId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res.status !== 200) {
        alert("Votre commentaire n'a pas pu être supprimé !");
      } else {
        this.$router.go();
      }
    },
    deletePostId() {
      localStorage.removeItem("postId");
    },
    storeCommentId(id) {
      const commentId = id;
      localStorage.setItem("commentId", JSON.stringify(commentId));
      console.log(commentId);
    },
    clearLocalStorage() {
      localStorage.removeItem("postId");
    },
  },
  async created() {
    this.post = await this.fetchOnePost();
  },
};
</script>