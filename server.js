const express = require("express");
console.log(express);


const app = express();

app.use(express.static(__dirname +'/static'));


app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');



app.get('/',(req, res) =>{
    res.render('index',{
        title: 'some title',
        users: [
            {
                firstName: 'Binta ',
                lastName: 'Diallo',
                email: 'bintadalen2009@gmail.com'
            
            }
        ]

    });
})



const port = 8000;
    
// req is shorthand for request
// res is shorthand for response
app.listen(8000,()=>console.log("listening on port 8000")); 