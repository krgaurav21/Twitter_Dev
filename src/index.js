const express = require("express");

const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000,async ()=>{
    console.log("server started at port 3000");

    await connect();
    console.log("Mongo db connected.");
    // const tweet = await Tweet.create({
    //     content:'Third tweet'
       
    // })

    // const tweet = await Tweet.find({userEmail:'a@b.com'});
   const tweetRepo = new TweetRepository();

   const tweet = await tweetRepo.create({content:"twit with hooks"});
   console.log(tweet);

//    const tweet= await tweetRepo.getAll(2,4);
   
//    console.log(tweet[0].contentWithEmail);
   
});    