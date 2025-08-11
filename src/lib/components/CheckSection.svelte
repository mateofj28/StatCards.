
<script>
  
  export let aceptado = false;
  export let titulo = "Truncate long translations in the editor";
  export let descripcion = "Easily customizable global styles";


  function toggleCheck() {
    aceptado = !aceptado;
  }

</script>


<div class="check-section" on:click={toggleCheck}>
  <input type="checkbox" bind:checked={aceptado} class="checkbox-grande" on:click|stopPropagation/>
  <div>
    <h4>{titulo}</h4>
    <p>{descripcion}</p>
  </div>      
</div>


<style>
  .check-section {
    display: flex;
    flex-direction: row;
    gap: 1em;
  }

  .checkbox-grande {
    width: 20px;
    accent-color: #1a73e8;
    cursor: pointer;
  }
</style>