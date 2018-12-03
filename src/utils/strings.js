const joinArrayOfStrings = (strings, size = 2) => {
  const slicedArray = strings.slice(0, size).join(', ');
  return strings.length > size ? `${slicedArray} ...` : slicedArray;
};

export { joinArrayOfStrings };
