const memModel = require('../models/member');

class Home {
    async IndexPage(req , res) {
        const data = await memModel.find({});

        res.render('index.ejs',{
            title : 'Index',
            members: data
        })
    }
}

const homeController = new Home();
module.exports = homeController ;