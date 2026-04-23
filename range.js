const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);
console.log(range(1, 20, 4));