let done = false;
let a = 1;
let h = 0;
let g = 0;

let b = 99;
let c = b;

let f = 1;
do {
  let d = 2;
  do {
    let e = 2;
    do {
      let g = d;

      g *= e;
      g -= b;

      if (g === 0) {
        f = 0;
      }

      e += 1;
      g = e;
      g -= b;
    } while (g !== 0);

    d += 1;
    g = d;
    g -= b;
  } while (g !== 0);
  if (f === 0) {
    h++;
  }

  g = b;
  g -= c;
  if (g === 0) {
    done = true;
  } else {
    b += 17;
  }
} while (!done);
