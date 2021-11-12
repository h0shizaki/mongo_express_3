class Test {
    homeTest(req , res) {
        res.render('index.ejs',{
            title : 'index'
        })
    }
}

const homeController = new Test();
module.exports = homeController ;