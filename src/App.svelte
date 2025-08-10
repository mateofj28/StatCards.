<script>
  import Router from "svelte-spa-router";
  import routes from "./routes.js";
</script>



<main>
  <Router {routes} />
</main>

<style>
  nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #0077ff;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
</style>
