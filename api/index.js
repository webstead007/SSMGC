// Vercel function entry point; the server package uses ES modules.
module.exports = async (req, res) => {
  const { default: app } = await import('../server/src/index.js');
  return app(req, res);
};
