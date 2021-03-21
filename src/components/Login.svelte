<script>
  import Profile from "./Profile.svelte";
  import Todos from "./Todos.svelte";

  import { auth, googleProvider } from "../services/Firebase";
  import { authState } from "rxfire/auth";

  let user;

  const unsubscribe = authState(auth).subscribe(
    (userData) => (user = userData)
  );

  function login() {
    auth.signInWithPopup(googleProvider);
  }
</script>

<section>
  {#if user}
    <Profile {...user} />
    <hr />
    <Todos uid={user.uid} />
  {:else}
    <button class="button is-info" on:click={login}>
      Signin with Google
    </button>
    <h6 class="subtitle">You must be login to use this app, let's go! 🚀</h6>
  {/if}
</section>

<style>
  section {
    padding: 20px;
    background: rgba(235, 235, 235);
    border-radius: 4px;
  }

  button {
    width: 100%;
  }

  h6 {
    text-align: center;
    margin-top: 20px;
  }
</style>
