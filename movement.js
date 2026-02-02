 const amplitude = 10;
    let speed = 0.3;

    let start = performance.now();

    function animate(time) {
      const cloud = document.getElementById("cloud");
      const beanimg = document.getElementById("beanimg");

      const y = Math.sin((time - start) * 0.002 * speed) * amplitude;

      cloud.style.transform = `translateY(${y}px)`;
      beanimg.style.transform =
  `translate(-50%, -50%) translateY(${y}px)`;


      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
