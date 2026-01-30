 const amplitude = 10;
    let speed = 0.3;

    let start = performance.now();

    function animate(time) {
      const cube = document.getElementById("cube");

      const y = Math.sin((time - start) * 0.002 * speed) * amplitude;

      cube.style.transform = `translateY(${y}px)`;

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
