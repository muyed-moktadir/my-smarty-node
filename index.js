const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());


app.get('/', (req,res)=>{
    res.send('kichu buyjhteci na but note nicchi allah vorosha')
})


// array of object:
const users=[
    {id: 1, name:'muyed',job:'bekar'},
    {id: 2, name:'moktadir',job:'bekar no'},
    {id: 3, name:'chowdhury',job:'become'},
    {id: 4, name:'Robin',job:'teacher'},
    {id: 5, name:'romiane',job:'engineer'}
]

// const practiceUsers=[
//     {id: 1, name:'muyed',job:'bekar'},
//     {id: 2, name:'moktadir',job:'bekar no'},
//     {id: 3, name:'chowdhury',job:'become'},
//     {id: 4, name:'robin',job:'teacher'},
//     {id: 5, name:'romiane',job:'engineer'}
// ]

app.get('/users',(req,res)=>{
    // TODO:filter by search query
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user=>user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
    
})

// dynamic vabe perameter read korar jonno id diye call korbo
// this is a dynamic route
app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id =parseInt(req.params.id);
    const user = users.find( u=> u.id===id);
    res.send(user);
})

// practice for reading dynamic data
// app.get('/practiceUser/:id',(req,res)=>{
//     const id = parseInt(req.params.id);

//     const practiceUser = practiceUsers.map(practiceUser=>practiceUser.id===id);
//     res.send(practiceUser);
// })


// for post (method alada  but route same hote pare)
app.post('/user',(req,res)=>{
console.log('request',req.body);
const user = req.body;
user.id = users.length +1; 
users.push(user)
res.send(user);
})

app.get('/fruits',(req,res)=>{
    res.send(['mango','oranges','apple']);
})

// multi layer ekta api call kora hoyeche
app.get('/fruits/mango/fazle',(req,res)=>{
    res.send('fazle is sour')
})


app.listen(port, ()=>{
    console.log('listen to the port',port);
})