<template>
  <div class="col border border-success">
    <div class="card" :users="users">
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
  name: "Users",
  props: {
    users: Array,
  },
};
</script>