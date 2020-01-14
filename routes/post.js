const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    posts: {
      title: 'Sample title',
      description: 'Sample description'
    }
  });
});

module.exports = router;
