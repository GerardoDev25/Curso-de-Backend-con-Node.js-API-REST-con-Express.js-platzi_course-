function logErrors(error, req, res, next) {
  console.log('logErrors');
  console.log(error);
  next(error);
}

function errorHandle(error, req, res, next) {
  console.log('errorHandle');
  res.status(500).json({ message: error.message, stack: error.stack });
  next(error);
}

module.exports = { logErrors, errorHandle };
