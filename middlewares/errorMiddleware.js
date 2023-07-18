const errorHandler = (req, res, next) => {
  res.status(404).render('error'); // Error sayfasını render etmek istediğiniz şablonu belirtin
};

module.exports = errorHandler;