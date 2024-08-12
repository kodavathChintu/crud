const express = require('express')

const router = express.Router()

const Model = require('../model/model')

router.get('/', async(req,res) =>
{
  try
  {
    const al= await Model.find()
    res.json(al)
  }catch(err)
  {
    res.send('Error '+ err)
  }
});


router.get('/:id', async(req,res) =>
{
  try
    {
      const model= await Model.findById(req.params.id)
        res.json(model)
    }catch(err)
      {
        res.send('Error '+ err)
      }
})


router.post('/', async(req,res) =>
{
    const model= new Model
      ({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
      })
    try
    {
      const a1 = await model.save()
      res.json(a1)
    }
    catch(err)
    {     
    res.send('Error')
    }
})

router.patch('/:id',async(req,res)=>
{
  try
  {
    const model= await Model.findById(req.params.id)
    model.sub = req.body.sub
    const a1 = await model.save()
    res.json(a1)
  }
    catch(err)
    {
      res.send('Error')
    }
})




module.exports=router