exports.handle = (err, req, res, next) => {
  const message = err.message || 'Server error';
  const status = err.status || 500;
  console.log(err);
  return res.status(status).json({ success: false, message: message });
};

exports.handle404 = (req, res, next) => {
  res.status(404).send("Welcome to YouGoComm's backend :')");
};
