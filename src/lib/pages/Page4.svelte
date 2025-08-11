<script>

  import CheckSection from '../components/CheckSection.svelte';

  let opciones = [
    "General",
    "Reporte de Transacción",
    "Autenticación de dos factores",
    "Notificaciones",
    "Tokens API"
  ];

  let opcionSeleccionada = "General";
  let username = "Funnel Saas";
  let email = "Funnelsas@gmail.com";
  let profile = "Edit Hotkey Profile";
  let opcion1 = true;
  let opcion2 = true;

</script>

<div class="config-layout">
  <h2>Configuración</h2>

  <div class="tabs-container">
    {#each opciones as opcion}
      <span
        class:tab-activa={opcion === opcionSeleccionada}
        class="tab-opcion"
        on:click={() => opcionSeleccionada = opcion}
      >
        {opcion}
      </span>
    {/each}
  </div>

  <div class="config-content">
    <div>
      <h3>Tu foto</h3>
      <p>Se mostrará en tu perfil</p>
    </div>
    <div class="avatar-section">
      <div class="avatar"></div>
      <span class="link-button">Eliminar</span>
      <span class="link-button">Actualizar</span>
    </div>
  </div>

  <hr class="linea-separadora" />

  <div class="credenciales-config">
    <div class="etiquetas-usuario">
      <span>Nombre de usuario</span>
      <span>Correo electrónico</span>
    </div>

    <div class="campos-usuario">       
      <input
        class="input-bonito"
        bind:value={username}
        placeholder="Escribe tu nombre..."
      />  
      <input
        class="input-bonito"
        bind:value={email}
        placeholder="Escribe tu correo..."
      />
    </div>
  </div>

  <hr class="linea-separadora" />

  <div class="config-content">
    <div>
      <h3>Opciones de vista del editor</h3>
      <p>Escribir una breve introducción</p>
    </div>
    <div class="data">

      <CheckSection 
        bind:aceptado={opcion1}
        titulo="Truncar traducciones largas en el editor"
        descripcion="Estilos globales fácilmente personalizables"
      />

      <CheckSection 
        bind:aceptado={opcion2}
        titulo="Mostrar errores ortográficos y gramaticales en el editor"
        descripcion="Estilos globales fácilmente personalizables"
      />

      
      <input
        class="input-bonito"
        bind:value={profile}
        placeholder="Escribe tu correo..."
        disabled
      />

      <span class="link-button">Mostrar atajos de teclado disponibles</span>
    </div>
    
  </div>

</div>

<style>
  .config-layout {
    text-align: left;
  }

  .tabs-container {
    background: rgb(247 247 249);
    padding: 0.5em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: fit-content;
    border-radius: 30px;
  }

  .labels {
    display: flex;
    flex-direction: row;
    padding-bottom: 1em;
    gap: 2em;
  }

  .tab-opcion {
    padding: 0.5em 1em;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;
  }

  .tab-opcion:hover {
    background: #ddd;
  }

  .tab-activa {
    background: rgb(255 255 255);
    color: black;
    font-weight: bold;
  }

  .config-content {
    display: flex;
    flex-direction: row;
    gap: 5em;
    width: 100%;
    padding: 1em 0 .1em;
  }

  .credenciales-config {
    display: flex;
    flex-direction: row;
    gap: 7em;
  }

  .data {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .etiquetas-usuario {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }

  .campos-usuario {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  


  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: black;
  }

  .avatar-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
  }

  .link-button {
    background: none;
    border: none;
    color: #1a73e8;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
  }

  .link-button:hover {
    color: #0c53b7;
    text-decoration: underline;
  }

  .linea-separadora {
    border: none;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
  }

  .input-bonito {
    padding: 0.75em 1em;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  .input-bonito:focus {
    border-color: #1a73e8;
    box-shadow: 0 0 5px rgba(26, 115, 232, 0.3);
  }

  .input-bonito::placeholder {
    color: #aaa;
  }

</style>
