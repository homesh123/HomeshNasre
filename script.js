const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let w, h, pts = [];
function resize() { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; }
resize(); window.addEventListener('resize', resize);
for (let i = 0; i < 80; i++) pts.push({ x: Math.random()*w, y: Math.random()*h, vx: (Math.random()-0.5)*0.3, vy: (Math.random()-0.5)*0.3, r: Math.random()*1.5+0.5 });
function draw() {
  ctx.clearRect(0,0,w,h);
  pts.forEach(p => { p.x += p.vx; p.y += p.vy; if (p.x<0||p.x>w) p.vx*=-1; if (p.y<0||p.y>h) p.vy*=-1; ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fillStyle='rgba(124,92,255,0.6)'; ctx.fill(); });
  for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++){ const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y); if(d<120){ ctx.strokeStyle=`rgba(34,211,238,${0.12*(1-d/120)})`; ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y); ctx.stroke(); } }
  requestAnimationFrame(draw);
}
draw();

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

document.querySelectorAll('.skill-card, .proj').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left)/r.width*100)+'%');
    el.style.setProperty('--my', ((e.clientY - r.top)/r.height*100)+'%');
  });
});
