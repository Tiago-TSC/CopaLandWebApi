module.exports = sendError = (res, err) => {
  const status = err.status || err.response ? err.response.status : null || 500;
  const message = err.response ? err.response.statusText : err.message;
  const detail = err.response
    ? err.response.data.error
      ? err.response.data.error.message.value
      : err.response.data
    : null;

  res.status(status).send({
    status,
    message,
    detail,
  });
};
