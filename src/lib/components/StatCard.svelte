

<script>
  import { MdCreditCard } from 'svelte-icons/md';
  export let title = "Total Delivery";
  export let amount = "$35874";
  export let percentage = "+1,29%";
  
</script>

<div class="card">
  <div class="card-header">
    <div class="icon-container">
      
    </div>
    <button class="menu-btn">⋮</button>
  </div>
  <p class="title">{title}</p>
  <div class="footer">
    <span class="amount">{amount}</span>
    <span class="percentage">{percentage}</span>
  </div>
</div>

<style>
  .card {
    background: #fff;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
    width: 220px;
    font-family: sans-serif;
    transition: transform 0.4s ease-out, box-shadow 0.4s ease-out, background 0.4s ease-out, color 0.4s ease-out;

  }

  .card:hover {
    box-shadow: 0 8px 28px rgba(0,0,0,0.1);
    transform: translateY(-10px);
    cursor: pointer;
    background: #4956f4;
  }

  .card:hover span,
  .card:hover p,
  .card:hover .icon-container,
  .card:hover .menu-btn {
    color: white !important;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #EBF4FF; /* azul claro */
    border-radius: 8px;
  }

  .icon {
    width: 10px !important;
    height: 10px !important;
  }

  .menu-btn {
    background: none;
    border: none;
    font-size: 18px;
    width: 20px;
    cursor: pointer;
    color: #444;
    padding: 4px; /* evita que quede pegado al borde */
  }

  .title {
    text-align: left;
    margin-top: 12px;
    font-size: 14px;
    color: #888;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 6px;
  }

  .amount {
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }

  .percentage {
    font-size: 14px;
    color: #22c55e;
    font-weight: 500;
  }
</style>

