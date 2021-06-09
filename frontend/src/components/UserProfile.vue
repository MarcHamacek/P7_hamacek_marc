<template>
  <div
    :key="user.userId"
    class="col card bg-light border border-danger mb-3 text-center"
  >
    <div class="card-body">
      <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
      <p class="card-text"><i class="fas fa-envelope"></i> {{ user.email }}</p>
      <a href="#" class="col-10 btn btn-primary"
        ><i class="fas fa-edit"></i> Modifier mes infos</a
      >
      <a @click.prevent="deleteUser" href="#" class="col-10 btn btn-danger"
        ><i class="fas fa-trash-alt"></i> Supprimer mon compte</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      user: {
        userId: "",
        firstName: "",
        lastName: "",
        department: "",
        email: "",
      },
    };
  },
  methods: {
    getUserConnected() {
      const res = localStorage.getItem("groupomaniaUser");

      const data = JSON.parse(res);

      return data;
    },
    async deleteUser() {
      const user = localStorage.getItem("groupomaniaUser");

      const data = JSON.parse(user);

      const id = data.userId;
      if (confirm("Êtes-vous sûr ?")) {
        const res = await fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? alert("Votre compte a bien été supprimé !")
          : alert("Nous n'avons pas pu supprimer votre compte !");
      }
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
  created() {
    this.user = this.getUserConnected();
  },
};
</script>