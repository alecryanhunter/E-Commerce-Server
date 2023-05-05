const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET ROUTE - ALL
router.get('/', (req, res) => {
  Tag.findAll({
    include: [{model:Product}]
  }).then(tags=>{
    res.json(tags);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// GET ROUTE - SINGULAR
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id,{
    include: [{model:Product}]
  }).then(tag=>{
    res.json(tag);
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// POST ROUTE
router.post('/', (req, res) => {
  Tag.create({
    tag_name: req.body.tag_name,
  }).then(newTag=>{
    res.json({msg: "new tag created",newTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// PUT ROUTE
router.put('/:id', (req, res) => {
  Tag.update({tag_name: req.body.tag_name}, {
    where: {
      id: req.params.id
    }
  }).then(updTag=>{
    res.json({msg: "tag updated",updTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

// DELETE ROUTE
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then(delTag=>{
    res.json({msg: "tag deleted",delTag});
  }).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err});
  });
});

module.exports = router;