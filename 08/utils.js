export function execute(inst) {
  const executed = new Set();

  let pointer = 0;
  let acc = 0;

  while (true) {
    if (pointer === inst.length) return { acc, terminated: true };
    if (executed.has(pointer)) return { acc, terminated: false };

    const [op, arg] = inst[pointer];

    executed.add(pointer);

    switch (op) {
      case 'acc':
        acc += Number(arg);
        pointer++;
        break;
      case 'jmp':
        pointer += Number(arg);
        break;
      case 'nop':
        pointer++;
        break;
    }
  }
}
