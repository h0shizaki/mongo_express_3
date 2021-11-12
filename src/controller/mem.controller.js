class Member {
    memberList(req , res) {
        res.send({Message: 'Member'})
    }

    addMemberPage(req,res){
        res.render('addMember.ejs', {
            title: "Add holo member"
        })
    }

    postMember(req, res){
        res.send(req.body)
    }
}

const memController = new Member();
module.exports = memController ;