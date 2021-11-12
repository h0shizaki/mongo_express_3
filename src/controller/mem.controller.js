const memModel = require('../models/member');

class Member {
    memberList(req , res) {
        res.send({Message: 'Member'})
    }

    addMemberPage(req,res){
        res.render('addMember.ejs', {
            title: "Add holo member"
        })
    }

    async postMember(req, res){
        const data = req.body;
        console.log(data)
        const result = await memModel.create(data)
        res.render('index.ejs',{
            title: 'Index',
            message: 'Add success'
        })
    }
}

const memController = new Member();
module.exports = memController ;