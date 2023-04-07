const router = require('express').Router();

const {sendMail} = require('../controller/appController');

/*Http Request*/
router.post('/user/sendMail', sendMail);

module.exports = router;
