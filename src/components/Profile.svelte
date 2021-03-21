<script>
  import { auth } from "../services/Firebase";

  export let displayName;
  export let photoURL;
  export let uid;
</script>

<div class="box columns" style="margin: 0 1px">
  <div class="column is-3">
    <div class="media-left">
      <figure class="image is-100x100">
        <img src={photoURL} width="100" alt="user avatar" class="card" />
      </figure>
    </div>
  </div>
  <div class="column is-9">
    <div class="content">
      <p>
        <strong>Hi {displayName} </strong><small>( {uid} )</small>
        <br />
        hi {displayName}, welcome back!, i hope your be fine today 😆, you can
        management your task here, like add, complete your task and also remove,
        lets go!! 🚀
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
        <button class="button is-danger" on:click={() => auth.signOut()}
          >Logout</button
        >
      </div>
    </nav>
  </div>
</div>
