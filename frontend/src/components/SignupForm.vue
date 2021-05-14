<template>
  <div class="container pt-5 pb-5 bg-light">
    <div class="row mt-5 mb-5">
      <form
        class="container col-6 text-left bg-white border border-danger rounded p-5"
      >
        <div class="row justify-content-center">
          <div class="form-group col-5 text-align-start">
            <input
              type="text"
              class="form-control"
              id="signinInputFirstName"
              placeholder="Prénom"
            />
          </div>
          <div class="form-group col-7 text-align-start">
            <input
              type="text"
              class="form-control"
              id="signinInputLastName"
              placeholder="Nom"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="form-group col text-align-start">
            <input
              type="text"
              class="form-control"
              id="departement"
              placeholder="Commercial"
            />
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="form-group col text-align-start">
            <input
              type="email"
              class="form-control"
              id="signinInputEmail"
              aria-describedby="emailHelp"
              placeholder="example@exemple.com"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="form-group col">
            <input
              type="password"
              class="form-control"
              id="signinInputPassword"
              placeholder="Mot de passe"
            />
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/feed" type="submit" class="col-6 btn btn-danger">
            S'inscrire
          </router-link>
        </div>
        <div class="row justify-content-center mt-3 pt-2 border-top border-secondary">
          <router-link to="/" class="text-secondary">Retour</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
};
</script>