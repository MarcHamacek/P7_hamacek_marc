<template>
  <div class="card" :users="users">
    <ul class="list-group list-group-flush">
      <li class="list-group-item text-center bg-light">Utilisateurs</li>
      <li class="list-group-item" :key="user.id" v-for="user in users">
        {{ user.lastName }}
      </li>
    </ul>
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