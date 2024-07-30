const indexPage=(req,res)=>{
    return res.render('index');
}
const changePassPage=(req,res)=>{
    return res.render('pages/changePassword');
}

module.exports={indexPage,changePassPage}