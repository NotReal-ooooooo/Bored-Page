 const amplitude = 10;
    let speed = 0.3;
 const amplitude2 = 20;
    let speed2 = 0.6;


    let start = performance.now();

    function animate(time) {
      const cloud = document.getElementById("cloud");
      const beanimg = document.getElementById("beanimg");

      const y = Math.sin((time - start) * 0.002 * speed) * amplitude;
      const yb = Math.sin((time - start) * 0.002 * speed2) * amplitude2;

      cloud.style.transform = `translateY(${y}px)`;
      beanimg.style.transform =
  `translate(-50%, -50%) translateY(${yb}px)`;


      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
