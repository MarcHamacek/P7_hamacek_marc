<template>
  <div class="col-4 border border-primary mt-2 pt-2 pb-3">
    <UserProfile />
    <Users :users="users" />
  </div>
</template>

<script>
import UserProfile from "./UserProfile.vue";
import Users from "./Users.vue";

export default {
  name: "Dashboard",
  components: {
    UserProfile,
    Users,
  },
  props: {
    users: Array,
  },
};
</script>