const userDB = require("../../model/userdetails_model");
const category=require("../../model/category")

exports.getCategory=async (req,res) => {
try{

        
  const cat = await category.aggregate([
      {
        $match: {
          isList: true
        }
      }
    ]);
  if(cat){
      res.render('categoryManagement',{categories:cat})
  }
}catch(err){
  console.error("getCategoryList",err);
}

}
const Category = require('../../model/categoryModel');
const User = require('../../model/userModel');



exports.getCategoryList=async(req,res)=>{
    try{

        
        const cat = await Category.aggregate([
            {
              $match: {
                isList: true
              }
            }
          ]);
        if(cat){
            res.render('categoryManagement',{categories:cat})
        }
    }catch(err){
        console.error("getCategoryList",err);
    }
}



exports.getCategoryDelete = async(req,res)=>{
    try{
        const id = req.query.id
            
        await Category.findOneAndUpdate({_id:id},{$set:{isList:false}})

        res.redirect('/admin/category')
    }catch(err){
        console.error(err);
    }
}
exports.getCategoryEditModal = async(req,res)=>{
   
   try{
    const id = req.query.id
    const category=await Category.findOne({_id:id})
    // console.log(category);
    res.render('editCategory',{category:category})
   }catch(err){
    console.error(err);
   }
}
exports.postCategoryListEdit = async(req,res)=>{
   
    try{
        const catId = req.query.id
    console.log(catId);
    const category =await Category.findOneAndUpdate({_id:catId},{
        
        categoryName:req.body.categoryName,
        image:req.file.filename
    })
    res.redirect('/admin/category')
    }catch(err){
        console.error(err);
    }
}
exports.getCategoryAddCat=async(req,res)=>{
    res.render('addCategory')
}

exports.postCategoryAddCat = async(req,res)=>{
    // console.log(req.body)
   console.log(req.file.filename);
    try {
        
        const existing = await Category.findOne({ categoryName: req.body.categoryName });
       
        if (existing) {
            res.render('addCategory', { message: "Category already exists" });
        } else {
           
           const category = await Category.insertMany([{
            categoryName: req.body.categoryName,
            description: req.body.description,
                
                image: req.file.filename
            }]);
            
            res.redirect('/admin/category')
        }
    } catch (err) {
        console.error("add product",err.message);
    }

    
   
}
exports.getSearch = async(req,res)=>{
    const searchQuery = new RegExp("^" + req.body.search, "i"); // Adding "i" flag for case-insensitive search

    Category.find({ categoryName: { $regex: searchQuery } }).then((cat) => {
      if (cat.length === 0) {
        res.render('categoryManagement',{categories:[]})
      } else {
        res.render('categoryManagement',{categories:cat})
      }
    });
  
}