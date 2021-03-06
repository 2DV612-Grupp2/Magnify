const controller = require('./controller');
const Router = require('express').Router;
const router = new Router();

router.route('/').post((...args) => controller.createAccount(...args));

router
  .route('/consumer')
  .post((...args) => controller.createConsumerAccount(...args));
router
  .route('/companyRep')
  .post((...args) => controller.createAccount(...args));
router.route('/:id').get((...args) => controller.getAccount(...args));

router.route('/login').post((...args) => controller.login(...args));

router.route('/product').post((...args) => controller.addProduct(...args));

module.exports = router;
