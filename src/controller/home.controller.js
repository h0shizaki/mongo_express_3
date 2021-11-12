class Home {
    IndexPage(req , res) {
        res.render('index.ejs',{
            title : 'Index'
        })
    }
}

const homeController = new Home();
module.exports = homeController ;