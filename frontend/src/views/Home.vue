<template>
  <div class="container bg-light pt-5 pb-5">
    <div class="row mt-5 mb-5">
      <div class="col">
        <div class="container col-10 p-4">
          <div class="row">
            <h4 class="mt-4 mb-4">
              Venez partager du contenu et restez en contact avec vos collègues.
            </h4>
          </div>
        </div>
      </div>
      <div class="col">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";

export default {
  name: "Home",
  components: {
    LoginForm,
  },
};
</script>
