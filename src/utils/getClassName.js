export default function getClassName(base, modifier) {
  return modifier ? `${base}--${modifier}` : '';
}
