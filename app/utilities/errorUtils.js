export const logError = (location, error) => {
  const message = (error && error.message) || error;
  console.warn(location, message);
};
