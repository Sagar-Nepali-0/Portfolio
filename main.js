
const cursor = document.getElementById('cursor');
  let mouseX = 0, mouseY = 0;
  let currX = 0, currY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    const speed = 0.2; // ← Increase this (e.g., 0.5) for faster response
    currX += (mouseX - currX) * speed;
    currY += (mouseY - currY) * speed;

    cursor.style.transform = `translate(${currX}px, ${currY}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();


