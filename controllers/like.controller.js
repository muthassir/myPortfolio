const Like = require('../model/likeModel.js')

exports.likeUpdate = async (req,res) =>{
    // const {likeCount} = req.body

    try {
    //         const updateLike = Like.findOneAndUpdate(likeCount)
    //   res.json(updateLike);
          
        // } else {
        //     const newLike = new Like({counter})
        //     await newLike.save();
        //     res.status(201).json({message: 'Liked Succesfully'})
        // }
        const updatedCounter = await Like.findOneAndUpdate(
            {}, // Empty query to update the single counter document
            { $inc: { likeCount: 1 } },
            { new: true }
          );
      
          if (!updatedCounter) {
            return res.status(500).json({ message: 'Error updating counter' });
          }
      
          res.json(updatedCounter);
      

    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'Server Error'})
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