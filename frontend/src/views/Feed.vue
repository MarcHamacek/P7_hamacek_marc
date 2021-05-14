<template>
  <div class="container">
    <div class="row border border-secondary mt-3 pt-2 pb-2 justify-content-around">
      <div class="col">
        <h5>Bienvenue John Doe !</h5>
      </div>
      <div class="col mx-auto">
        <a type="submit" class="col-4 btn btn-light">Update Profile</a>
        <a type="submit" class="col-4 btn btn-primary text-white">Add Post</a>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-4 mt-3">
        <UsersList />
      </div>
      <div class="col-8 border border-secondary mt-3">
        <Post />
        <Post />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "../components/Post";
import UsersList from "../components/UsersList";

export default {
  name: "Feed",
  components: {
    Post,
    UsersList,
  },
};
</script>