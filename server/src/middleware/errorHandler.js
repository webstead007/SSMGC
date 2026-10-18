export function notFound(_req, res) {
  res.status(404).json({ message: 'The requested API endpoint was not found.' });
}

export function errorHandler(error, _req, res, _next) {
  console.error(error);
  if (error.name === 'ValidationError') return res.status(400).json({ message: 'The submitted information is invalid.' });
  res.status(error.status || 500).json({ message: error.status ? error.message : 'An unexpected server error occurred.' });
}
