const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

let particles = input.split('\n').map(l => {
  const [p, v, a] = l.split(', ').map(s => s.substring(3, s.length - 1));
  const [ax, ay, az] = a.split(',').map(Number);
  const [vx, vy, vz] = v.split(',').map(Number);
  const [px, py, pz] = p.split(',').map(Number);

  return {
    ax,
    ay,
    az,
    vx,
    vy,
    vz,
    px,
    py,
    pz
  };
});

while (true) {
  particles = particles.filter((p, i, a) => {
    const collitions = a.filter((t, ti) => {
      return ti !== i && t.px === p.px && t.py === p.py && t.pz === p.pz;
    });

    return collitions.length === 0 ? true : false;
  });

  console.log(particles.length);

  for (let i = 0; i < particles.length; i++) {
    particles[i].vx += particles[i].ax;
    particles[i].vy += particles[i].ay;
    particles[i].vz += particles[i].az;
    particles[i].px += particles[i].vx;
    particles[i].py += particles[i].vy;
    particles[i].pz += particles[i].vz;
  }
}
