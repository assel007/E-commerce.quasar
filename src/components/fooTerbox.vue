<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-box">
        <h3>Email</h3>
        <p>aseel@gmail.com</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #2a1f46;
  color: #fff;
  padding: 24px 20px;
  margin-top: 40px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.footer-box {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 18px 20px;
  text-align: center;
}

.footer-box h3 {
  margin: 0 0 10px;
  font-size: 1.1rem;
  color: #f7d28d;
}

.footer-box p {
  margin: 0;
  font-size: 0.95rem;
  color: #f5f5f5;
}
</style>
