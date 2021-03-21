<script>
  import Login from "./components/Login.svelte";

  export let title, subtitle;
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"
  />
</svelte:head>

<main class="content">
  <h3 class="title">{title}</h3>
  <h5 class="subtitle">{subtitle}</h5>
  <Login />
</main>

<style>
  main {
    margin: 20px;
    max-width: 800px;
  }

  h3 {
    margin-top: 20px;
  }

  h3,
  h5 {
    text-align: center;
  }
</style>
