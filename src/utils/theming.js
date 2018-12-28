const removeClassesFromApp = () => {
  document.body.classList = '';
};

const addClassesToApp = (theme, font) => {
  document.body.classList.add(theme);
  document.body.classList.add(font);
};

const updateAppClasses = () => {
  removeClassesFromApp();
  const theme = localStorage.getItem('status');
  const font = localStorage.getItem('Font');
  const fontName = font || 'modern';
  const themeName = theme === 'DARK' ? 'night-mode' : 'default';
  addClassesToApp(themeName, fontName);
};

export { updateAppClasses };
