<script>
</script>

<button class="soft-btn">View All</button>

<div class="image-card">
  <div class="percentage-badge">95%</div>
  <div class="card-content">
    <div class="attendance">
      <h3>Attendance</h3>
      <span class="numbers">73/76</span>
    </div>
    <p>Great, you always attending class, keep it</p>
  </div>
</div>


<style>
  .soft-btn {
    background-color: #f7f6ff; /* Fondo suave */
    border: 1px solid #b9b5ff; /* Borde morado claro */
    border-radius: 8px; /* Esquinas redondeadas */
    color: #4c51bf; /* Texto morado */
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .soft-btn:hover {
    background-color: #eceaff; /* Un poco más oscuro al pasar el mouse */
    transform: translateY(-2px); /* Ligero levantamiento */
  }

  .image-card {
    position: relative;
    width: 260px;
    height: 320px;
    background-image: url('https://images.unsplash.com/photo-1529074963764-98f45c47344b'); /* Cambia por tu imagen */
    background-size: cover;
    background-position: center;
    border-radius: 16px;
    overflow: hidden;
    color: white;
    font-family: sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  }

  .image-card::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40%; /* altura del degradado */
    background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  }

  .percentage-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: white;
    color: black;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 20px;
  }

  .card-content,
  .attendance,
  .p {
    z-index: 2;
  }


  .card-content {
    position: absolute;
    bottom: 12px;
    left: 12px;
    right: 12px;
  }

  .attendance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    

  }

  .card-content h3 {
    margin: 0;
    font-size: 16px;
    font-weight: bold;
  }

  .card-content .numbers {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 14px;
    font-weight: 500;
  }

  .card-content p {
    font-size: 12px;
    opacity: 0.8;
    margin-top: 6px;
  }


</style>
