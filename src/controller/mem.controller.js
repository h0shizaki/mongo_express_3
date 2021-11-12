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
        const member = await memModel.find({});
        const data = {
            'id': member.length,
            'engName' : req.body.engName,
            'jpName' : req.body.jpName,
            'youtubeURL':req.body.youtubeURL ,
            'twitterURL': req.body.twitterURL,
            'picURL': req.body.picURL
            }

        const result = await memModel.create(data)
        res.redirect('/')
    }
}

const memController = new Member();
module.exports = memController ;