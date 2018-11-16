const getNested = (path, object) => path.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), object);

export { getNested };
