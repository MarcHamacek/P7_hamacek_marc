<template>
  <form class="justify-content-center border border-dark p-2">
    <div class="form-row input-group">
      <input
        class="form-control"
        aria-label="large"
        type="text"
        name="content"
        placeholder="Que voulez-vous publier ?"
      />
    </div>
    <input type="submit" class="btn btn-primary" value="Publier" />
  </form>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      content: '',
    }
  },
  methods: {

  }
};
</script>