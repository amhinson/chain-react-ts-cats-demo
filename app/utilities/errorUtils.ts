export const logError = (location: string, error?: Error) => {
  const message = (error && error.message) || error;
  console.warn(location, message);
};
