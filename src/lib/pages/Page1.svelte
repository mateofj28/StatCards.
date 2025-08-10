<script>
  import StatCard from '../components/StatCard.svelte';
</script>


<main>
  <StatCard title="Total Delivery" amount="$358.22" percentage="+1,22%" />
  <StatCard title="New Orders" amount="$1250" percentage="+3,5%" />
  <StatCard title="Total Delivery" amount="$358.22" percentage="+1,22%" />
  <StatCard title="New Orders" amount="$1250" percentage="+3,5%" />
</main>

<style>
  main {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap; /* Permite que salten a otra línea */
  }

  @media (max-width: 768px) {
    main {
      flex-direction: column; /* En móviles, uno debajo del otro */
      align-items: center;
    }
  }
</style>


