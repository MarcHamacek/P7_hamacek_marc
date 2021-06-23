<template>
  <div class="border border-secondary rounded mt-3">
    <router-link @click.prevent="clearLocalStorage" to="/feed"
      >Retour</router-link
    >
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
          <router-link to="/postUpdate"
            ><i class="far fa-edit text-dark"></i
          ></router-link>
        </p>
        <p>
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
      </div>
      <div class="card-body bg-light">
        <input type="text" name="comment" v-model="post.comment.content" />
        <input
          @click.prevent="commentPost"
          class="btn btn-primary"
          type="submit"
          value="Commenter"
        />
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
        id: "",
        content: "",
        image: "",
        updatedAt: "",
        User: {
          firstName: "",
          lastName: "",
        },
        comment: {
          content: "",
          PostId: "",
        },
      },
    };
  },
  methods: {
    async fetchOnePost() {
      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;
      const postId = localStorage.getItem("postId");
      const id = JSON.stringify(postId);

      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const data = await res.json();

      return data;
    },
    async deletePost() {
      const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
      const token = user.token;
      const postId = localStorage.getItem("postId");
      const id = JSON.stringify(postId);

      const res = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (res.status === 200) {
        alert("Votre publication a bien été supprimée !");
        this.$router.push({ name: "Feed" });
      } else {
        alert("Votre publication n'a pas pu être supprimée !");
      }
    },
    commentPost() {
    //   const user = JSON.parse(localStorage.getItem("groupomaniaUser"));
    //   const token = user.token;
      const id = localStorage.getItem("postId");
      const PostId = JSON.stringify(id);
      const content = this.post.comment.content;
      const comment = {
        content,
        PostId,
      };
      console.log(comment);
      //   if (!content) {
      //     alert("Veuillez remplir tous les champs !");
      //   } else {
      //   }
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