function getProducts(req,res){
   res.render('admin/products/all-products');
}

function getNewProducts(req,res){
    res.render('admin/products/new-products');
}

function createNewProducts(req , res){
    console.log(req.body)
    console.log(req.file)
    res.redirect('/admin/products');
}

module.exports={
    getProducts:getProducts,
    getNewProducts:getNewProducts,
    createNewProducts:createNewProducts
}