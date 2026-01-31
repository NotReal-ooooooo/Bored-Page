 const amplitude = 10;
    let speed = 0.3;

    let start = performance.now();

    function animate(time) {
      const cloud = document.getElementById("cloud");

      const y = Math.sin((time - start) * 0.002 * speed) * amplitude;

      cloud.style.transform = `translateY(${y}px)`;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
