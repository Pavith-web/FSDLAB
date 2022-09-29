const express = require ('express')
const { model } = require('mongoose')
const router = express.Router()
router.get('/',async(req,res) =>
{
    try{
        const b1 = await book1.find()
        res.join(b1)
    }catch(err)
    {
        console.log('error'+err)
    }
})
router.post('/',async(req,res)=>{
    
})
model.exports = router