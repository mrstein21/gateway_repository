articleController=require('../controller/article_controller');
const router = require('express-promise-router')();
const { verify_jwt } = require('../middleware/verify_jwt');

router.route("/").get(verify_jwt(),articleController.get_articles);
router.route("/search/:keyword").get(verify_jwt(),articleController.search_articles);
module.exports=router;