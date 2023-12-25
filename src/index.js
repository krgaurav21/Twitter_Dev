const express = require("express");

const connect = require('./config/database');
const app = express();
const Tweet = require('./models/tweet');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000,async ()=>{
    console.log("server started at port 3000");

    await connect();
    console.log("Mongo db connected.");
    const tweets = await Tweet.find({
        content: ["12345678"]

    });
    console.log(tweets);
    
});    