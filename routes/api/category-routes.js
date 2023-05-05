const router = require('express').Router();
const { Category, Product } = require('../../models');

// GET ROUTE - ALL
router.get('/', (req, res) => {
  Category.findAll({
    include: [{model:Product}]
  }).then(categories=>{
    res.json(categories);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// GET ROUTE - SINGULAR
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id,{
    include: [{model:Product}]
  }).then(category=>{
    res.json(category);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// POST ROUTE
router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name,
  }).then(newCategory=>{
    res.json({msg: "new category created",newCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// PUT ROUTE
router.put('/:id', (req, res) => {
  Category.update({category_name: req.body.category_name}, {
    where: {
      id: req.params.id
    }
  }).then(updCategory=>{
    res.json({msg: "category updated",updCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(delCategory=>{
    res.json({msg: "category deleted",delCategory});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

module.exports = router;