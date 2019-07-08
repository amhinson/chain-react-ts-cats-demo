export const logError = (location, error) => {
  const message = (error && error.message) || error;
  console.wran(location, message);
};
