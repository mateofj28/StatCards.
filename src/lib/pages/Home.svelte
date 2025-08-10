<script>
  import { push } from 'svelte-spa-router';


  let task = "";
  let errorMessage = "";
  let status = "Agregada";

  const taskStates = ["Agregada", "Empezada", "A la mitad", "Finalizada"];
  let tasks = [];

  let isLoading = false; // para animar el botón
  let editingIndex = null;
  let editingText = "";

  function addTask() {
    if (!task.trim()) {
      errorMessage = "Escribe una tarea";
      return;
    }

    // Normalizar para evitar diferencias por mayúsculas/minúsculas o espacios
    const taskNormalized = task.trim().toLowerCase();
    const exists = tasks.some(t => t.description.trim().toLowerCase() === taskNormalized);

    if (exists) {
      errorMessage = "Esta tarea ya existe";
      task = ""; // limpiar el campo
      return;
    }

    errorMessage = ""; // limpia error si está bien
    isLoading = true;
    setTimeout(() => {
      tasks = [...tasks, { description: task.trim(), status }];
      task = "";
      status = "Agregada";
      isLoading = false;
    }, 1000);
  }

  function gotoDashboard() {
    push('/dashboard/page1'); // 👈 navega a la página About
  }

  function updateStatus(index, newStatus) {
    tasks = tasks.map((t, i) => i === index ? { ...t, status: newStatus } : t);
  }

  function deleteTask(index) {
    tasks = tasks.filter((_, i) => i !== index);
  }

  function startEditing(index) {
    editingIndex = index;
    editingText = tasks[index].description;
  }

  function saveEdit(index) {
    if (editingText.trim()) {
      tasks = tasks.map((t, i) => i === index ? { ...t, description: editingText } : t);
    }
    editingIndex = null;
  }
</script>

<div class="layout">
  <!-- Formulario -->
  <div class="form-container">
    <label>
      Tarea:
      <textarea
        class:error-border={errorMessage}
        bind:value={task}
        placeholder="Escribe tu tarea"
        rows="2"        
      ></textarea>
      {#if errorMessage}
        <span class="error">{errorMessage}</span>
      {/if}

    </label>

    <label>
      Estado:
      <select bind:value={status}>
        {#each taskStates as state}
          <option value={state}>{state}</option>
        {/each}
      </select>
    </label>

    <button on:click={addTask} disabled={isLoading}>
      {#if isLoading}
        <span class="scroll-text">Agregando...</span>
      {:else}
        Agregar tarea
      {/if}
    </button>

    <button on:click={gotoDashboard}>
      Ir al dash
    </button>
  </div>

  <!-- Tabla -->
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Tarea</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#each tasks as t, index}
          <tr>
            <td>
              {#if editingIndex === index}
                <input
                  type="text"
                  bind:value={editingText}
                  on:keydown={(e) => e.key === 'Enter' && saveEdit(index)}
                />
              {:else}
                <span class="task-name" role="button" tabindex="0" on:click={() => startEditing(index)} on:keydown={(e) => e.key === 'Enter' && startEditing(index)}>
                  {t.description}
                </span>
              {/if}
            </td>
            <td>
              <select bind:value={t.status} on:change={(e) => updateStatus(index, e.target.value)}>
                {#each taskStates as state}
                  <option value={state}>{state}</option>
                {/each}
              </select>
            </td>
            <td>
              <button class="delete-btn" on:click={() => deleteTask(index)}>🗑️</button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<style>
  /* Layout principal */
  .layout {
    display: flex;
    gap: 3rem; /* más separación horizontal */
    padding: 1rem;
    flex-wrap: wrap;
  }

  /* Formulario */
  .form-container {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  textarea, select, input[type="text"], button {
    padding: 0.6rem;
    border-radius: 6px;
    border: 1px solid #bbb;
    width: 100%;
    box-sizing: border-box;
    font-size: 0.95rem;
    font-family: inherit;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  textarea:focus, select:focus, input[type="text"]:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 5px rgba(0, 119, 255, 0.4);
  }

  textarea {
    resize: none;
  }

  select {
    background-color: #fff;
    appearance: none;
  }

  button {
    background-color: #0077ff;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover:not(:disabled) {
    background-color: #005fcc;
  }

  button:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    align-items: flex-start; /* label siempre arriba */
  }

  /* Efecto scroll en el texto del botón */
  .scroll-text {
    display: inline-block;
    animation: scroll 1s linear infinite;
  }

  @keyframes scroll {
    0% { transform: translateX(0); }
    50% { transform: translateX(10px); }
    100% { transform: translateX(0); }
  }

  /* Tabla */
  .table-container {
    flex: 2;
    min-width: 300px;
    max-height: 450px; /* altura fija */
    overflow-y: auto; /* scroll interno */
    border: 1px solid #ccc;
    border-radius: 6px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 0.6rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .delete-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }

  .task-name {
    cursor: pointer;
    color: #0077ff;
  }

  .task-name:hover {
    text-decoration: underline;
  }

  .error {
    color: red;
    font-size: 0.85rem;
    margin-top: 0.3rem;
  }

  textarea.error-border {
    border-color: red;
  }


  /* Responsivo */
  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
      gap: 2rem;
    }
  }
</style>
