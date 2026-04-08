<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gushwork Ultimate</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="loader">Loading...</div>

<header id="header">
  Gushwork
  <button class="dark-btn" onclick="toggleDark()">🌙</button>
</header>

<section class="hero">
  <div class="container hero-wrapper">

    <div class="hero-image">
      <img id="mainImage" src="assets/product.jpg" alt="product">
      <div class="thumbnails">
        <img src="assets/product.jpg" onclick="changeImage(this)">
        <img src="assets/product.jpg" onclick="changeImage(this)">
        <img src="assets/product.jpg" onclick="changeImage(this)">
      </div>
    </div>

    <div class="hero-content">
      <h1>Premium HDPE Pipes & Coils for Modern Infrastructure</h1>
      <p>Built for durability, flexibility and performance.</p>
      <button class="btn">Get Quote</button>
    </div>

  </div>
</section>

<section class="features fade-in">
  <div class="container">
    <h2>Built to Last. Engineered to Perform.</h2>
    <div class="grid">
      <div class="card">Superior Chemical Resistance</div>
      <div class="card">Exceptional Flexibility</div>
      <div class="card">Leak-Proof Welding</div>
      <div class="card">Cost Effective</div>
      <div class="card">Environment Friendly</div>
      <div class="card">Certified Quality</div>
    </div>
  </div>
</section>

<footer class="footer">
  <p>© 2026 Gushwork</p>
</footer>

<script src="script.js"></script>
</body>
</html>
