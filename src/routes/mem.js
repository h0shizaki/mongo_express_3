const express = require('express');
const router = express.Router() ;
const memController = require("../controller/mem.controller");

router.get('/' , memController.memberList )
router.get('/add' ,memController.addMemberPage);
router.post('/post' ,memController.postMember);

module.exports = router 