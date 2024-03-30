import express from "express";

const app = express();

const port = 5000;



app.get('/samosa',(req,res)=>{

    const queryParams = req.query;
    console.log("#########")
    console.log(queryParams);
    console.log("#########")
    res.json({
        name:"This is a famous samosa of gujarat",
        price : 15
    })
})

app.get('/samosa',(req,res)=>{
    console.log("Headers" , req.headers);
    res.json({
        name:"This is a famous samosa of gujarat",
        price : 15
    })
})

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.json({
       message: "User Has created"
    })

})

app.listen(5000,()=>{
    console.log('server is running on port 5000')
})