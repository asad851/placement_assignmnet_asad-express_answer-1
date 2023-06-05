const express = require('express')
const app = express()

app.get('/post',(req,res)=>{
    const posts=[];
    for(let i=1; i<=20; i++){
        posts.push({id:i,title: `Post number ${i}`})
    }
    res.json(posts);
})
const port=3000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})