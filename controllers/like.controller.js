const Like = require('../model/likeModel.js')

exports.likeUpdate = async (req,res) =>{
       
    try {
        const {postId} = req.body
        const like = await Like.findById(postId)

        if(like){
          return res.status(400).json({message: "you already Liked"})
        }else{
         const newLike = new Like(postId)
         await newLike.save()
         res.status(200).json({message: "Liked succesfully"})
        }
     
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Error liking'})
    }
}

exports.likeGet = async (req,res)=>{
    try {
        const resp = await Like.find()
    res.json({resp})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'})
    }
    
}