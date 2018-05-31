const router = require('express').Router();
const validator = require('validator');

const Url = require('../models/url');

router.get('/:shortUrl', ({ params: { shortUrl } }, res) => {
  Url.find({
    _id: shortUrl
  })
  .limit(1)
  .lean()
  .exec((err, urls) => {
    if (err) return res.status(500).send({ err, message: 'error accured getting url'});
    if (urls.length === 0) return res.status(404).send({ message: 'that url doesnt convert to anything' });

    res.redirect(urls[0].url);
  })
})

router.post('/shorten', ({ body: { url }}, res) => {
  //if (!validator.isEmail(url)) return res.status(404).send('Not a valid url');

  const shortend = new Url({
    url
  })

  shortend.save((err, shortend) => {
    if (err) return res.status(500).send('error accured');

    return res.status(200).send({ shortend: shortend._id });
  })
})

module.exports = router;