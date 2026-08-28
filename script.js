// ==========================================================================
// Rohit Jha D - Senior UI/UX Portfolio Interactive Logic & Visualizations
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initAnimatedCounters();
  initCharts();
  initMobileNav();
});

/* --------------------------------------------------------------------------
 * 1. Particle Canvas Background Animation
 * -------------------------------------------------------------------------- */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = Math.floor((width * height) / 18000);
  const particles = [];

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw lines between close particles
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];
      p1.x += p1.vx;
      p1.y += p1.vy;

      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;

      ctx.beginPath();
      ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 242, 254, ${p1.alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 242, 254, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
 * 2. Animated Number Counters
 * -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('.impact-number');
  const speed = 60;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;

        const updateCount = () => {
          const increment = Math.ceil(target / speed);
          if (count < target) {
            count += increment;
            if (count > target) count = target;
            counter.innerText = count + '%';
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target + '%';
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

/* --------------------------------------------------------------------------
 * 3. Chart.js Interactive Visualizations
 * -------------------------------------------------------------------------- */
function initCharts() {
  // Chart 1: Turnaround Time Reduction (HPCL)
  const ctx1 = document.getElementById('turnaroundChart');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Dryout Sales Aggregation', 'Product Market Share', 'Outstanding Dues Tracking', 'MIS Executive Reporting'],
        datasets: [
          {
            label: 'Legacy Process (Hours)',
            data: [14, 10, 8, 12],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: '#ff6384',
            borderWidth: 1.5,
            borderRadius: 6
          },
          {
            label: 'Automated Power BI + SQL (Hours)',
            data: [2, 1.5, 1, 1.8],
            backgroundColor: 'rgba(0, 242, 254, 0.8)',
            borderColor: '#00f2fe',
            borderWidth: 1.5,
            borderRadius: 6
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#cbd5e1', font: { family: 'Outfit' } } }
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' }, title: { display: true, text: 'Hours per Cycle', color: '#94a3b8' } }
        }
      }
    });
  }

  // Chart 2: UEBA Anomaly Score Visualization (C-DAC)
  const ctx2 = document.getElementById('anomalyChart');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'line',
      data: {
        labels: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
        datasets: [
          {
            label: 'Normal Traffic Baseline',
            data: [0.12, 0.15, 0.11, 0.22, 0.28, 0.25, 0.18, 0.14],
            borderColor: '#4facfe',
            backgroundColor: 'rgba(79, 172, 254, 0.1)',
            fill: true,
            tension: 0.4
          },
          {
            label: 'Detected Anomaly Event (Lateral Movement)',
            data: [0.12, 0.15, 0.89, 0.95, 0.30, 0.24, 0.18, 0.14],
            borderColor: '#ff4b5c',
            backgroundColor: 'rgba(255, 75, 92, 0.2)',
            borderDash: [5, 5],
            fill: true,
            tension: 0.4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#cbd5e1', font: { family: 'Outfit' } } }
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' }, title: { display: true, text: 'Reconstruction Loss Score', color: '#94a3b8' } }
        }
      }
    });
  }
}

/* --------------------------------------------------------------------------
 * 4. Mobile Navigation Toggle
 * -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
  }
}
