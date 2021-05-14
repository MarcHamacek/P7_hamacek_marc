<template>
  <form
    class="container col-10 text-left bg-white border border-danger rounded p-5"
  >
    <div class="row justify-content-center">
      <div class="form-group col text-align-start">
        <input
          type="email"
          class="form-control"
          id="signinInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Adresse e-mail"
        />
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="form-group col">
        <input
          type="password"
          class="form-control"
          id="signinInputPassword1"
          placeholder="Mot de passe"
        />
      </div>
    </div>
    <div class="row justify-content-center mt-3">
      <router-link to="/feed" type="submit" class="col-8 btn btn-danger">Se connecter</router-link>
    </div>
    <div class="row justify-content-center mt-4 pt-4 border-top border-secondary">
      <router-link to="/about" class="col-8 btn btn-secondary">S'incrire</router-link>
    </div>
  </form>
</template>

<script>
export default {
  name: "LoginForm",
};
</script>