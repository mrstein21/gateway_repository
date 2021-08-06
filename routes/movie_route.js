var movieController=require('../controller/movie_controller');
const router = require('express-promise-router')();
const { verify_jwt } = require('../middleware/verify_jwt');
router.route("/top_rated/:page").get(verify_jwt(),movieController.get_top_rated);
router.route("/popular/:page").get(verify_jwt(),movieController.get_popular);
module.exports=router;