function getClassModifier(base, modifier) {
  return modifier ? `${base}--${modifier}` : '';
}

function getClassName(base, modifier) {
  return modifier ? `${base}-${modifier}` : base;
}

export { getClassModifier, getClassName };
