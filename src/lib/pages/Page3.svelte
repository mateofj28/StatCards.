<!--<script>
  import { fly } from 'svelte/transition';
</script>

<div>
  <h1 in:fly={{ y: 50, duration: 500 }}>
    Hola desde abajo 👋
  </h1>

  <button
    in:fly={{ y: 80, duration: 700, delay: 200 }}
    style="margin-top: 1rem; padding: 0.5rem 1rem; background: #4956f4; color: white; border: none; border-radius: 6px; cursor: pointer;"
  >
    Presióname
  </button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
</style>

<script>
  import { fly, fade } from 'svelte/transition';

  function flyAndFade(node, params) {
    const f = fly(node, params);
    const fa = fade(node, params);

    return {
      delay: params.delay || 0,
      duration: Math.max(f.duration, fa.duration),
      css: t => `${f.css(t)} ${fa.css(t)}`
    };
  }
</script>

<h2 transition:flyAndFade={{ y: 50, duration: 400 }}>
  Hola con fade y slide
</h2>

<script>
  import { scale } from 'svelte/transition';
</script>

<button in:scale={{ start: 0.5, duration: 300 }}>
  Aparezco agrandándome
</button>

<script>
  import { fly } from 'svelte/transition';
</script>

<div in:fly={{ y: 20, x: -20, duration: 500 }}>
  <span style="display:inline-block; transform: rotate(15deg);">Rotado 🎯</span>
</div>


<script>
  import { fly } from 'svelte/transition';
  let items = ['🍎', '🍌', '🍇'];
  let count = 0;

  function add() {
    items = [...items, `🍒 ${++count}`];
  }

  function remove(item) {
    items = items.filter(i => i !== item);
  }
</script>

<button on:click={add}>Agregar</button>

<ul>
  {#each items as item (item)}
    <li in:fly={{ x: -50 }} out:fly={{ x: 50 }} on:click={() => remove(item)}>
      {item}
    </li>
  {/each}
</ul>

<script>
  let text = "Hola mundo con efecto máquina de escribir";
  let display = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) display += text[i++];
    else clearInterval(interval);
  }, 100);
</script>

<h3>{display}</h3>


<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let count = tweened(0, { duration: 10000, easing: cubicOut });
  count.set(100); // animará de 0 a 100
</script>

<h1>{$count.toFixed(0)}</h1>



<style>
  .ripple-btn {
    position: relative;
    overflow: hidden;
    padding: 10px 20px;
    background: #4956f4;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.7);
    transform: scale(0);
    animation: ripple 0.6s linear;
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
</style>

<script>
  let ripples = [];

  function createRipple(e) {
    const size = e.target.offsetWidth;
    const x = e.offsetX - size / 2;
    const y = e.offsetY - size / 2;

    ripples = [...ripples, { x, y, size }];
    setTimeout(() => ripples.shift(), 600);
  }
</script>

<button class="ripple-btn" on:click={createRipple}>
  Click con ripple
  {#each ripples as r}
    <span class="ripple" style="width:{r.size}px;height:{r.size}px;top:{r.y}px;left:{r.x}px;"></span>
  {/each}
</button>


<script>
  import { fade, fly } from 'svelte/transition';
  let show = false;
</script>

<button on:click={() => show = true}>Abrir Modal</button>

{#if show}
  <div class="overlay" on:click={() => show = false} in:fade>
    <div class="modal" in:fly={{ y: -100, duration: 300 }}>
      <h2>Hola</h2>
      <p>Soy un modal animado</p>
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex; align-items: center; justify-content: center;
  }
  .modal {
    background: white;
    padding: 2rem;
    border-radius: 10px;
  }
</style>

<script>
  import { tweened } from 'svelte/motion';
  let progress = tweened(0, { duration: 1500 });
  progress.set(80); // anima hasta 80%
</script>

<div style="background:#ccc; width:300px; height:20px; border-radius:10px;">
  <div style="background:#4956f4; height:100%; border-radius:10px; width:{$progress}%"></div>
</div>

<script>
  import { fade } from 'svelte/transition';
  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <p in:fade={{ duration: 500 }}>Texto con fade</p>
{/if}

<script>
  import { fly } from 'svelte/transition';
  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <p in:fly={{ y: 50, duration: 500 }}>Hola desde abajo</p>
{/if}

<script>
  import { scale } from 'svelte/transition';
  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <p in:scale={{ duration: 400 }}>Zoom in</p>
{/if}

<script>
  import { slide } from 'svelte/transition';
  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <p in:slide={{ duration: 400 }}>Deslizamiento</p>
{/if}


<style>
  button {
    background: #4956f4;
    color: white;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 8px;
    transition: transform 0.2s ease, background 0.2s ease;
  }
  button:hover {
    transform: scale(1.05);
    background: #3b47d6;
  }
</style>

<button>Hover suave</button>

<script>
  import { fly } from 'svelte/transition';
  let show = true;
</script>

<button on:click={() => show = !show}>Toggle</button>

{#if show}
  <p in:fly={{ y: -100, duration: 800, easing: t => (--t) * t * t + 1 }}>
    Rebote
  </p>
{/if}

<script>
  import { fly } from 'svelte/transition';
  let showPopup = false;

  function togglePopup() {
    showPopup = !showPopup;
  }
</script>

<style>
  .popup {
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10;
    min-width: 150px;
  }

  .button-container {
    position: relative; /* importante para posicionar el popup */
    display: inline-block;
  }
</style>

<div class="button-container">
  <button on:click={togglePopup}>Mostrar popup</button>

  {#if showPopup}
    <div class="popup" in:fly={{ y: 10, duration: 200 }}>
      Esto es un popup flotante 🎈
    </div>
  {/if}
</div>


<script>
  import { fly } from 'svelte/transition';
  let showPopup = false;

  function togglePopup() {
    showPopup = !showPopup;
  }

  function closePopup(e) {
    if (!e.target.closest('.button-container')) {
      showPopup = false;
    }
  }

  // Cierra el popup al hacer click fuera
  document.addEventListener('click', closePopup);
</script>

<style>
  .popup {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    border: 1px solid #ccc;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10;
    min-width: 150px;
  }

  /* Flechita (cacho) */
  .popup::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: transparent transparent white transparent;
  }

  .button-container {
    position: relative;
    display: inline-block;
  }
</style>

<div class="button-container">
  <button on:click={togglePopup}>Mostrar popup</button>

  {#if showPopup}
    <div class="popup" in:fly={{ y: 10, duration: 200 }}>
      Popup con cacho 😎  
      <br />
      Aquí va tu contenido
    </div>
  {/if}
</div>


<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  let progress = tweened(0, { duration: 1500, easing: cubicOut });

  function start() {
    progress.set(Math.floor(Math.random() * 100)); // valor aleatorio
  }
</script>

<style>
  .container {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;
  }

  svg {
    transform: rotate(-90deg);
  }

  /* General text */
  .label {
    font-size: 1.2rem;
    text-anchor: middle;
    dominant-baseline: middle;
    fill: #333;
  }
</style>

<button on:click={start}>Actualizar Progreso</button>

<div class="container">

  
  {#await progress}
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="45" stroke="#ddd" stroke-width="8" fill="none" />
      <circle
        cx="50" cy="50" r="45"
        stroke="#4956f4"
        stroke-width="8"
        fill="none"
        stroke-linecap="round"
        stroke-dasharray={2 * Math.PI * 45}
        stroke-dashoffset={2 * Math.PI * 45 * (1 - $progress / 100)}
      />
    </svg>
  {/await}

  
  <svg width="100" height="100">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff7e5f" />
        <stop offset="100%" stop-color="#feb47b" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="45" stroke="#ddd" stroke-width="8" fill="none" />
    <circle
      cx="50" cy="50" r="45"
      stroke="url(#grad)"
      stroke-width="8"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray={2 * Math.PI * 45}
      stroke-dashoffset={2 * Math.PI * 45 * (1 - $progress / 100)}
    />
  </svg>

  
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="45" stroke="#eee" stroke-width="8" fill="none" />
    <circle
      cx="50" cy="50" r="45"
      stroke="#00bcd4"
      stroke-width="8"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray={2 * Math.PI * 45}
      stroke-dashoffset={2 * Math.PI * 45 * (1 - $progress / 100)}
    />
    <text x="50" y="50" class="label">{$progress.toFixed(0)}%</text>
  </svg>

  
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="45" stroke="#ddd" stroke-width="8" fill="none" />
    <circle
      cx="50" cy="50" r="45"
      stroke="#ff5722"
      stroke-width="8"
      fill="none"
      stroke-dasharray="4 6"
      stroke-dashoffset={-($progress)}
    />
  </svg>

  
  <svg width="100" height="100">
    <circle cx="50" cy="50" r="45" stroke="#ddd" stroke-width="8" fill="none" />
    <circle
      cx="50" cy="50" r="45"
      stroke="#4956f4"
      stroke-width="8"
      fill="none"
      opacity="0.3"
    />
    <circle
      cx="50" cy="50" r="45"
      stroke="#4956f4"
      stroke-width="8"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray={2 * Math.PI * 45}
      stroke-dashoffset={2 * Math.PI * 45 * (1 - $progress / 100)}
    />
  </svg>

</div>-->


