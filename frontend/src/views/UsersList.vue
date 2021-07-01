<template>
  <div class="col">
    <div class="row justify-content-center">
      <router-link to="/feed" class="btn btn-dark text-center mt-2 mb-2">
        Retour
      </router-link>
    </div>
    <div class="card">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center bg-light">Utilisateurs</li>
        <li class="list-group-item" :key="user.id" v-for="user in users">
          {{ user.firstName }} {{ user.lastName }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      const res = await fetch("http://localhost:5000/users");

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.users = await this.fetchUsers();
  },
};
</script>