const express = require('express');
const router = express.Router() ;
const memController = require("../controller/mem.controller");


router.get('/add' ,memController.addMemberPage);
router.post('/post' ,memController.postMember);
router.get('/edit/:id' , memController.editMemberPage);
router.post('/put' , memController.putMember);

module.exports = router 