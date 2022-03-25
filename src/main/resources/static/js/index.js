var c = document.getElementById('c');
var ctx = c.getContext('2d');

var w = window.innerWidth;
var h = window.innerHeight;

var particles = [];
for (i = 0; i < 50; i++) {
  particles.push(new particle);
}

function particle() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.r = 1;

  this.vx = Math.random() * w / 30;
  this.vy = Math.random() * h / 30;
}

var draw = function () {
  c.width = w;
  c.height = h;

  for (t = 0; t < particles.length; t++) {
    var p = particles[t];

    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(p.x, p.y, p.r, Math.random() * 2, false);
    ctx.fill();

    var size = true;

    if (size) {
      p.r++;
    }

    p.x += p.vx;
    p.y += p.vy;

    if (p.r > w / 3) {
      size = false;
    }

    if (p.y < 0)
      p.vy *= -1;
    if (p.y > h)
      p.vy *= -1;
    if (p.x < 0)
      p.vx *= -1;
    if (p.x > w)
      p.vx *= -1;
  }
}

setInterval(draw, 15);

setTimeout(function () {
  document.getElementById('c').style.display = 'none';
}, 5000);
