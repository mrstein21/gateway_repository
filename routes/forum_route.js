forumController=require('../controller/forum_controller');
const router = require('express-promise-router')();
const { verify_jwt } = require('../middleware/verify_jwt');

router.route("/question").get(verify_jwt(),forumController.get_question);
router.route("/question/answer/:id").get(verify_jwt(),forumController.get_answer);
module.exports=router;