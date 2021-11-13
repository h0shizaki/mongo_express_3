const memModel = require('../models/member');

class Member {

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

    async editMemberPage(req ,res){
        const id = req.params.id;
        const result = await memModel.findOne({'id': id});
        
        res.render('editMember.ejs', {
            title : 'Edit member page',
            data : result
        })

    }

    async putMember(req, res){
        const result = await memModel.updateOne(
            {
                id : req.body.memId
            },
            {
                $set:{
                    engName : req.body.engName,
                    jpName : req.body.jpName,
                    youtubeURL : req.body.youtubeURL,
                    twitterURL : req.body.twitterURL,
                    picURL : req.body.picURL
                }

            } )

        console.log(result);
        res.redirect('/')
    }
}

const memController = new Member();
module.exports = memController ;