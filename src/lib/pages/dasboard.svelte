<script>
  import Router, { push } from 'svelte-spa-router';
  import { MdDashboard, MdAssignment, MdPeople, MdSettings, MdHelp } from 'svelte-icons/md';

  import DashboardHome from './DashboardHome.svelte';
  import Page1 from './Page1.svelte';
  import Page2 from './Page2.svelte';
  import Page3 from './Page3.svelte';
  import Page4 from './Page4.svelte';
  import Page5 from './Page5.svelte';
  import NotFound from './NotFound.svelte';

  let activeItem = 'Inicio';

  const menuItems = [
    { name: 'Inicio', icon: MdDashboard, path: '/dashboard/page1' },
    { name: 'Tareas', icon: MdAssignment, path: '/dashboard/page2' },
    { name: 'Usuarios', icon: MdPeople, path: '/dashboard/page3' },
    { name: 'Configuración', icon: MdSettings, path: '/dashboard/page4' },
    { name: 'Ayuda', icon: MdHelp, path: '/dashboard/page5' }
  ];

  const routes = {
    '/dashboard/page1': Page1,
    '/dashboard/page2': Page2,
    '/dashboard/page3': Page3,
    '/dashboard/page4': Page4,
    '/dashboard/page5': Page5,
    '*': NotFound
  };

  function goTo(path, name) {
    push(path);
    activeItem = name;
  }
</script>

<div class="dashboard">
  <aside class="sidebar">
    <h2>Menú</h2>
    <ul>
      {#each menuItems as { name, path, icon: Icon }}
        <li>
          <button
            class="menu-btn {activeItem === name ? 'active' : ''}"
            on:click={() => goTo(path, name)}
            aria-label={name}
          >
            <span class="menu-icon"><Icon size={24} /></span>
            <span class="menu-text">{name}</span>
          </button>
        </li>
      {/each}
    </ul>
  </aside>

  <div class="content">
    <Router {routes} />
  </div>
</div>

<style>
  .dashboard {
    display: flex;
    height: 100vh;
  }

  .sidebar {
    background: #ffffff;
    color: grey;
    padding: 1rem;
    min-width: 200px;
  }

  .sidebar h2 {
    margin-bottom: 1rem;
  }

  .sidebar ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
    margin: 0;
  }

  .sidebar li {
    list-style: none;
  }

  :global(.menu-btn) {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    border: none;
    background: #f9f9f9;
    color: grey;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    text-align: left;
  }

  :global(.menu-btn.active) {
    background: #4956f4;
    color: white;
  }

  :global(.menu-btn.active .menu-icon svg) {
    fill: white;
    stroke: white;
  }

  .menu-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex: 0 0 32px;
  }

  .menu-text {
    flex: 1;
  }

  .content {
    flex: 1;
    background-color: #ebecf8;
    padding: 2rem;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .dashboard {
      flex-direction: column;
    }

    .sidebar {
      display: flex;
      flex-direction: row;
      overflow-x: auto;
      min-width: unset;
    }

    .sidebar ul {
      display: flex;
      gap: 0.5rem;
    }

    .sidebar li {
      min-width: 100px;
    }
  }
</style>
