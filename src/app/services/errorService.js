module.exports = sendError = (res, err) => {
  const status = err.status || 500;
  const message = err.message || 'Ocorreu um erro interno';

  res.status(status).send({
    status,
    message,
  });
};
