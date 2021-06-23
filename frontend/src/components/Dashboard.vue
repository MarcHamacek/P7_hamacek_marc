<template>
  <div class="row border border-secondary">
    <div class="col">
      <nav class="navbar navbar-expand-sm navbar-light">
        <div class="card-body border border-secondary">
          <h6 class="card-text">
            <i class="fas fa-user text-secondary"></i> {{ user.firstName }}
            {{ user.lastName }}
          </h6>
          <h6 class="card-text">
            <i class="fas fa-briefcase text-secondary"></i>
            {{ user.department }}
          </h6>
          <h6 class="card-text">
            <i class="fas fa-envelope text-secondary"></i> {{ user.email }}
          </h6>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/usersList" class="btn btn-light">
                <i class="fas fa-user-friends"></i> Utilisateurs
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profileUpdate" class="col-10 btn btn-primary">
                <i class="fas fa-edit"></i> Modifier mon profil
              </router-link>
            </li>
            <li class="nav-item">
              <a @click.prevent="logout" class="btn btn-secondary" href="#">
                <i class="fas fa-sign-out-alt"></i> Déconnexion
              </a>
            </li>
            <li class="nav-item">
              <a @click.prevent="deleteUser" href="#" class="btn btn-danger">
                <i class="fas fa-trash-alt"></i> Supprimer mon compte
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      user: {
        userId: "",
        firstName: "",
        lastName: "",
        department: "",
        email: "",
        isAdmin: "",
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
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Home" });
    },
  },
  created() {
    this.user = this.getUserConnected();
  },
};
</script>